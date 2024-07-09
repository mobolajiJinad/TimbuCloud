import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState({ message: "", color: "" });

  useEffect(() => {
    setCartCount(cartItems.reduce((count, item) => count + item.quantity, 0));
  }, [cartItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ message: "", color: "" });
    }, 2500);

    return () => clearTimeout(timer);
  }, [notification]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
    setNotification({
      message: "Item added to cart",
      color: "text-green-500",
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId),
    );
    setNotification({
      message: "Item removed from cart",
      color: "text-red-500",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setNotification({
      message: "Cart cleared",
      color: "text-red-500",
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const closeNotification = () => {
    setNotification({ message: "", color: "" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalPrice,
        notification,
        closeNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

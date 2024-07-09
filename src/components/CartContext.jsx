import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((count, item) => count + item.quantity, 0));
  }, [cartItems]);

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
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

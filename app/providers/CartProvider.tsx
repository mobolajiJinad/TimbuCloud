"use client";

import { createContext, useState, useEffect } from "react";

interface CartContextType {
  cartCount: number;
  cartItems: {
    id: number;
    image: string;
    name: string;
    star: number;
    price: string;
    quantity: number;
    details: string;
  }[];
  addToCart: (product: {
    id: number;
    name: string;
    image: string;
    price: string;
    star: number;
    details: string;
    quantity: number;
  }) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
  notification: { message: string; color: string };
  closeNotification: () => void;
}

// Initialize CartContext with a default value
export const CartContext = createContext({
  cartItems: [],
  cartCount: 0,
  addToCart: (product: {
    id: number;
    name: string;
    image: string;
    price: string;
    star: number;
    details: string;
    quantity: number;
  }) => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateQuantity: (productId: number, quantity: number) => {},
  totalPrice: 0,
  notification: { message: "", color: "" },
  closeNotification: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [notification, setNotification] = useState({ message: "", color: "" });

  // Recalculate the cart count whenever cartItems change
  useEffect(() => {
    setCartCount(cartItems.reduce((count, item) => count + item.quantity, 0));
  }, [cartItems]);

  // Automatically clear notifications after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ message: "", color: "" });
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [notification]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity for existing item
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
    });

    setNotification({
      message: "Item added to cart",
      color: "text-green-500",
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
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
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
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

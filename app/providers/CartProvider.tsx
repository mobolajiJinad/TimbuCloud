"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  image: string;
  name: string;
  star: number;
  price: number;
  quantity: number;
  details: string;
}

interface Notification {
  message: string;
  color: string;
}

interface CartContextType {
  cartCount: number;
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number) => void;
  totalPrice: number;
  notification: Notification;
  closeNotification: () => void;
  setNotification: (notification: Notification) => void;
}

export const CartContext = createContext<Partial<CartContextType>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [notification, setNotification] = useState<Notification>({
    message: "",
    color: "",
  });

  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification({ message: "", color: "" });
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [notification]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
    });

    setNotification({
      message: "Item added to cart",
      color: "text-green-500",
    });
  };

  const removeFromCart = (productId: number) => {
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

  const updateQuantity = (productId: number, quantity: number) => {
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
        setNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

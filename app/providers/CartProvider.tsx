"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  image: string;
  name: string;
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

const defaultContext: Partial<CartContextType> = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  updateQuantity: () => {},
  notification: { message: "", color: "" },
  closeNotification: () => {},
  setNotification: () => {},
};

export const CartContext =
  createContext<Partial<CartContextType>>(defaultContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [notification, setNotification] = useState<Notification>({
    message: "",
    color: "",
  });

  useEffect(() => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setCartCount(count);
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        closeNotification();
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [notification]);

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
    setNotification({ message: "Item added to cart", color: "text-green-500" });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setNotification({
      message: "Item removed from cart",
      color: "text-red-500",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setNotification({ message: "Cart cleared", color: "text-red-500" });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

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

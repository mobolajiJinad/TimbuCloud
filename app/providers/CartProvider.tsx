"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";

import { createCartCookie, getCartItemsCookie } from "@/app/utils/action";

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
    const fetchCartItems = async () => {
      const cartItems = await getCartItemsCookie();
      setCartItems(cartItems);
    };

    fetchCartItems();
  }, []);

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

      return () => clearTimeout(timer);
    }
  }, [notification]);

  /**
   * Utility function to handle cart updates and cookie updates
   */
  const updateCart = async (
    newCart: CartItem[],
    notificationMessage?: Notification
  ) => {
    setCartItems(newCart);
    try {
      await createCartCookie(newCart);
      if (notificationMessage) {
        setNotification(notificationMessage);
      }
    } catch (error) {
      console.error("Failed to update cart cookie:", error);
      setNotification({
        message: "Failed to update cart",
        color: "text-red-500",
      });
    }
  };

  const addToCart = (product: CartItem) => {
    const updatedCart = [...cartItems];
    const existingItem = updatedCart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      updatedCart.push(product);
    }

    updateCart(updatedCart, {
      message: "Item added to cart",
      color: "text-green-500",
    });
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    updateCart(updatedCart, {
      message: "Item removed from cart",
      color: "text-red-500",
    });
  };

  const clearCart = () => {
    updateCart([], { message: "Cart cleared", color: "text-red-500" });
  };

  const updateQuantity = (id: number, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    updateCart(updatedCart);
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

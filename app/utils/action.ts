"use server";

import { cookies } from "next/headers";

export const createCartCookie = async (
  cart: {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
    details: string;
  }[]
) => {
  const cookieStore = await cookies();

  // Serialize and set the cart cookie
  cookieStore.set("cart", JSON.stringify(cart), {
    path: "/", // Make the cookie accessible across the entire site
    sameSite: "strict", // Prevent CSRF attacks
    httpOnly: true, // Ensure only the server can access this cookie
    maxAge: 60 * 60 * 24 * 7, // 1 week expiration
  });

  console.log(`Cart cookie created with value: ${JSON.stringify(cart)}`);
};

export const getCartItemsCookie = async () => {
  const cookieStore = await cookies();

  const cartCookie = cookieStore.get("cart");
  const cartItems = cartCookie ? JSON.parse(cartCookie.value) : [];

  return cartItems;
};

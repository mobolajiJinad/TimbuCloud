"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";

import { CartContext } from "@/app/providers/CartProvider";
import { products } from "@/app/data";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  details: string;
}

export default function Page({ params }: { params: { id: number } }) {
  const {
    addToCart,
    cartItems,
    notification,
    closeNotification,
    setNotification,
  } = useContext(CartContext);

  const productPageID = Number(params.id);

  const product = products.find((item: Product) => item.id === productPageID);

  const cartItem = cartItems?.find(
    (item: Product) => item.id === productPageID
  );

  const [quantity, setQuantity] = useState<number>(cartItem?.quantity || 1);

  useEffect(() => {
    if (!product) {
      setNotification?.({
        message: "Product not found.",
        color: "text-red-500",
      });
    }
  }, [product, setNotification]);

  const handleAddToCart = () => {
    if (!product || !addToCart) return;
    addToCart({ ...product, quantity });
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <main>
      {notification?.message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-white shadow-md ${notification.color}`}
        >
          <p>{notification.message}</p>
          <button className="ml-4 text-red-500" onClick={closeNotification}>
            ✕
          </button>
        </div>
      )}

      <div className="flex items-center justify-center bg-[#CDEFE933] pb-9 pt-12">
        <Image
          width={224}
          height={224}
          src={product?.image || ""}
          alt={product?.name || "Unavailable"}
          className="h-56 w-56 rounded-full border bg-black"
        />
      </div>

      <div className="my-7 px-[5%]">
        <h1 className="my-5 text-center text-2xl font-semibold">
          {product?.name || "Unavailable"}
        </h1>
        <p className="my-3 text-base font-normal text-black">
          <span className="font-semibold">Product details: </span>
          {product?.details || "No details available for this product."}
        </p>

        <p className="text-sm">
          <span className="font-semibold">Display:</span> 1.4inch{" "}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Sensors:</span> Heart rate monitor
        </p>
        <p className="text-sm">
          <span className="font-semibold">Connectivity:</span> Bluetooth 5.0
        </p>

        <div className="my-3 flex items-center justify-between">
          <h4 className="text-2xl font-medium">
            ${product ? product.price * quantity : 0}
          </h4>

          <div>
            <button
              className="text-lg font-bold px-3 py-1 bg-gray-200 rounded"
              onClick={incrementQuantity}
              disabled={!product}
            >
              +
            </button>
            <span className="mx-4 border px-2 py-1">{quantity}</span>
            <button
              className="text-lg font-bold px-3 py-1 bg-gray-200 rounded"
              onClick={decrementQuantity}
              disabled={!product}
            >
              -
            </button>
          </div>
        </div>
      </div>

      <button
        className="my-2 ml-auto mr-4 block rounded-xl bg-dark-cyan px-5 py-2 text-sm font-medium text-white sm:px-3"
        onClick={handleAddToCart}
        disabled={!product}
      >
        Add to cart
      </button>
    </main>
  );
}

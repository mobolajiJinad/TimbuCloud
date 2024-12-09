"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CartContext } from "@/app/providers/CartProvider";

import WhiteCart from "@/app/assets/WhiteCart.svg";
import ClearCart from "@/app/assets/ClearCart.svg";

export default function Page() {
  const {
    cartItems = [],
    updateQuantity,
    cartCount = 0,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-100 px-4">
      <main className="w-full my-5 max-w-3xl rounded-lg bg-white p-6 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold">Checkout</h1>

        {cartCount > 0 ? (
          <>
            <div className="mb-4 flex items-center justify-between text-base font-semibold text-black">
              <span className="w-20"></span>
              <span className="w-3/12 sm:w-3/12">Item</span>
              <span className="w-5/12 sm:w-2/12">Quantity</span>
              <span className="w-4/12 sm:w-4/12">Price</span>
            </div>

            {cartItems?.map((item) => (
              <div
                key={item.id}
                className="my-2 flex items-center justify-between"
              >
                <Image
                  width={64}
                  height={64}
                  src={item.image}
                  alt={item.name}
                  className="block h-16 w-16 sm:h-24 sm:w-24"
                />

                <div className="flex w-3/12 flex-col">
                  <h2 className="my-3 text-sm font-semibold sm:text-base">
                    {item.name}
                  </h2>
                </div>

                <div className="flex w-2/12 items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity?.(item.id, parseInt(e.target.value))
                    }
                    className="w-9 border text-center sm:w-11 sm:p-2"
                  />
                </div>

                <div className="flex w-4/12 items-center">
                  <span className="text-base sm:text-lg">
                    ${(item.price * (item.quantity || 0)).toFixed(2)}
                  </span>

                  <Image
                    src={ClearCart}
                    className="ml-2 cursor-pointer sm:ml-3"
                    onClick={() => removeFromCart?.(item.id)}
                    alt="Remove item"
                  />
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-col items-center space-y-4">
              <button
                className="flex w-full max-w-xs items-center justify-center rounded-xl bg-dark-cyan px-3 py-1.5 text-white"
                onClick={() => clearCart?.()}
              >
                <Image src={WhiteCart} alt="Clear Cart" className="mr-2" />
                Clear Cart
              </button>
              <button
                className="w-full max-w-xs rounded-xl bg-dark-cyan px-3 py-1.5 text-base font-medium text-white"
                onClick={() => router.push("/checkout/4lefr403c")}
              >
                Checkout
              </button>
            </div>
          </>
        ) : (
          <h2 className="my-9 text-center text-2xl font-semibold">
            Cart is empty
          </h2>
        )}

        <Link
          href="/products"
          className="mt-6 block text-center text-base font-medium capitalize text-dark-cyan"
        >
          continue shopping
        </Link>
      </main>
    </div>
  );
}

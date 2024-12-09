"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";

import { CartContext } from "@/app/providers/CartProvider";
import ConnectBtn from "@/app/components/ConnectBtn";

import CheckoutSuccessful from "@/app/assets/CheckoutSuccessful.svg";
import MenuOpen from "@/app/assets/MenuOpen.svg";

const Page = () => {
  const { totalPrice = 0 } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      <div className="mx-auto my-5 flex flex-col items-center w-full rounded-lg bg-[#CDEFE9]/50 p-6 shadow-md max-w-96">
        <h4 className="mb-6 text-center text-lg font-semibold text-gray-800">
          Order Summary
        </h4>

        <div className="w-full space-y-4">
          {[
            { label: "Subtotal", value: `$${totalPrice?.toFixed(2)}` },
            { label: "Discount", value: "$0" },
            { label: "Shipping", value: "$0" },
            { label: "Total", value: `$${totalPrice?.toFixed(2)}` },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-3 text-sm text-gray-600"
            >
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <ConnectBtn />
        </div>
      </div>

      {checkout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative flex w-4/5 max-w-md flex-col items-center rounded-lg bg-white p-6 shadow-lg">
            <Image
              src={MenuOpen}
              alt="Close Modal"
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setCheckout(false)}
            />

            <Image
              src={CheckoutSuccessful}
              alt="Checkout Successful"
              className="mt-4 w-16 h-16"
            />

            <h4 className="mt-4 text-xl font-semibold text-gray-800">
              Congratulations!
            </h4>
            <p className="my-3 text-sm text-gray-600">Checkout successful.</p>
            <Link
              href="/products"
              className="mt-6 rounded-lg bg-teal-600 px-6 py-2 text-white hover:bg-teal-500"
              onClick={() => setCheckout(false)}
            >
              Back to Shop
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

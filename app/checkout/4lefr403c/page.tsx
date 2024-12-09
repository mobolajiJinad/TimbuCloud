"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";
import { parseEther } from "viem";

import { CartContext } from "@/app/providers/CartProvider";
import ConnectBtn from "@/app/components/ConnectBtn";

import CheckoutSuccessful from "@/app/assets/CheckoutSuccessful.svg";
import MenuOpen from "@/app/assets/MenuOpen.svg";

const Page = () => {
  const { isConnected } = useAccount();
  const { totalPrice = 0 } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  const {
    data: hash,
    isPending,
    sendTransaction,
    error,
  } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const handleCheckout = async () => {
    const to = process.env.NEXT_PUBLIC_TO_ADDRESS;

    const toAsAddress = to as `0x${string}`;

    const value = parseEther(totalPrice.toFixed(18).toString());

    setCheckout(true);

    await sendTransaction({ to: toAsAddress, value });
  };

  return (
    <>
      <div className="mx-auto my-5 flex flex-col items-center w-11/12 rounded-lg bg-[#CDEFE9]/50 p-6 shadow-md max-w-[425px]">
        <h4 className="mb-6 text-center text-lg font-semibold text-gray-800">
          Order Summary
        </h4>

        <div className="w-full space-y-4">
          {[
            { label: "Subtotal", value: `${totalPrice?.toFixed(4)} ETH` },
            { label: "Discount", value: "0 ETH" },
            { label: "Shipping", value: "0 ETH" },
            { label: "Total", value: `${totalPrice?.toFixed(4)} ETH` },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-3 text-sm text-gray-600"
            >
              <span className={item.label === "Total" ? "font-semibold" : ""}>
                {item.label}
              </span>
              <span className={item.label === "Total" ? "font-semibold" : ""}>
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <ConnectBtn />
        </div>

        {isConnected && (
          <button
            className="mt-6 rounded-lg bg-teal-500 px-6 py-3 text-white hover:bg-dark-cyan"
            onClick={handleCheckout}
          >
            Pay {totalPrice?.toFixed(4)} ETH
          </button>
        )}
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

            {isPending ? (
              <div className="flex flex-col items-center">
                <div className="loader my-4"></div>{" "}
                <p className="text-sm text-gray-600">
                  Processing your checkout...
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {error ? (
                  <div className="text-red-500 py-4">
                    Error:{" "}
                    {(error as BaseError)?.shortMessage || error?.message}
                  </div>
                ) : (
                  <>
                    <Image
                      src={CheckoutSuccessful}
                      alt="Checkout Successful"
                      className="mt-4 w-16 h-16"
                    />
                    <h4 className="mt-4 text-xl font-semibold text-gray-800">
                      Congratulations!
                    </h4>
                    <p className="my-3 text-sm text-gray-600">
                      Checkout successful.
                    </p>
                  </>
                )}
                {hash && (
                  <div className="flex flex-col items-center">
                    <p className="break-words text-sm text-gray-600">
                      Transaction Hash:{" "}
                      <a
                        href={`https://etherscan.io/tx/${hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 underline hover:text-teal-700"
                      >
                        {hash.slice(0, 6)}...{hash.slice(-4)}
                      </a>
                    </p>
                    <button
                      onClick={() => navigator.clipboard.writeText(hash)}
                      className="mt-2 text-xs text-teal-500 hover:text-teal-700"
                    >
                      Copy Hash
                    </button>
                  </div>
                )}

                {isConfirming && (
                  <p className="text-sm sm:text-base">
                    Waiting for confirmation...
                  </p>
                )}
                {isConfirmed && (
                  <p className="text-sm sm:text-base">Transaction confirmed.</p>
                )}

                <Link
                  href="/products"
                  className="mt-6 rounded-lg bg-teal-600 px-6 py-2 text-white hover:bg-teal-500"
                  onClick={() => setCheckout(false)}
                >
                  Back to Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;

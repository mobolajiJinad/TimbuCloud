"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useContext } from "react";

import { CartContext } from "@/app/providers/CartProvider";
import TimbuCloud from "@/app/assets/TimbuCloud.svg";
import { useRouter } from "next/navigation";

const Links = [
  { name: "Home", href: "/" },
  { name: "Category", href: "/category" },
  { name: "Products", href: "/products" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);
  const router = useRouter();

  return (
    <header className="sticky top-0 w-full bg-[#CDEFE9] px-[5%] shadow-sm">
      <div className="mx-auto px-4 py-3">
        <div className="grid grid-cols-[1fr_auto_auto] items-center sm:grid-cols-3">
          <div className="flex items-center justify-self-start">
            <div className="bg-dark-cyan h-10 w-10 flex items-center justify-center rounded-full">
              <Image src={TimbuCloud} alt="Timbu logo" />
            </div>
            <h1 className="ml-2 text-base font-semibold text-dark-cyan">
              Timbu
            </h1>
          </div>

          <nav className="hidden justify-center space-x-6 sm:flex">
            {Links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-dark-cyan text-xl font-medium capitalize"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 justify-self-end">
            <button
              className="relative text-dark-cyan"
              aria-label="Cart"
              onClick={() => router.push("/checkout")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-1.2 8.4a5 5 0 01-5 4.6H9.2a5 5 0 01-5-4.6L3 3zm6 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                />
              </svg>

              <span className="absolute font-medium bottom-5 left-6 text-red-600 rounded-full text-base ">
                {cartCount}
              </span>
            </button>

            <button
              className="text-dark-cyan sm:hidden"
              aria-label="Menu"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`absolute ${
          isMenuOpen ? "right-0" : "right-full"
        } top-16 w-3/5 max-w-60 rounded-br-3xl rounded-tl-3xl border border-white bg-white px-5 shadow-lg transition-all duration-200 ease-in sm:hidden`}
      >
        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="block my-5 text-dark-cyan font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;

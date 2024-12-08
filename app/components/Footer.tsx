"use client";

import Image from "next/image";

import SendBtn from "@/app/assets/SendBtn.svg";

const Footer = () => {
  return (
    <footer className="mt-3 capitalize bg-dark-cyan px-[5%] py-5 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 pl-5 xsm:pl-0 xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <div>
          <h4 className="my-2 text-xl font-bold">about</h4>
          <ul className="text-sm font-medium">
            <li className="my-1">
              <a href="#">marketplace</a>
            </li>
            <li className="my-1">
              <a href="#">services</a>
            </li>
            <li className="my-1">
              <a href="#">seller</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="my-2 text-xl font-bold">categories</h4>
          <ul className="text-sm font-medium">
            <li className="my-1">
              <a href="#">phones</a>
            </li>
            <li className="my-1">
              <a href="#">laptop</a>
            </li>
            <li className="my-1">
              <a href="#">ear pods</a>
            </li>
            <li className="my-1">
              <a href="#">headphones</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="my-2 text-xl font-bold">help</h4>
          <ul className="text-sm font-medium">
            <li className="my-1">
              <a href="#">get help</a>
            </li>
            <li className="my-1">
              <a href="#">contact us</a>
            </li>
            <li className="my-1">
              <a href="#">FAQs</a>
            </li>
            <li className="my-1">
              <a href="#">self help</a>
            </li>
          </ul>
        </div>

        <div id="contacts">
          <h4 className="my-2 text-xl font-bold">newsletter</h4>
          <p className="text-sm font-medium">
            Subscribe to Timbu Newsletter below
          </p>

          <div className="mx-auto mt-1 flex items-center">
            <input
              type="text"
              name="emailAddress"
              placeholder="Email Address"
              className="w-full max-w-[200px] rounded p-1 text-black sm:max-w-[250px]"
            />
            <div className="ml-2 flex h-8 w-8 items-center justify-center rounded bg-white">
              <Image src={SendBtn} alt="Send Button" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";

import TimbuCloud from "../assets/TimbuCloud.svg";
import Cart from "../assets/Cart.svg";
import MenuClosed from "../assets/MenuClosed.svg";
import MenuOpen from "../assets/MenuOpen.svg";
import Notifications from "../assets/Notifications.svg";

const navLinks = [
  { name: "home", link: "/" },
  { name: "category", link: "/#category" },
  { name: "blog", link: "/#blog" },
  { name: "contacts", link: "/#contacts" },
];

const Header = () => {
  const [menuOpen, setMenu] = useState(false);

  return (
    <>
      <header className="bg-header-gradient flex items-center justify-between px-2 py-4 md:py-7">
        <div className="flex w-1/2 items-center sm:w-1/4 md:ml-7">
          <div className="bg-dark-cyan flex h-9 w-9 items-center justify-center rounded-full">
            <img src={TimbuCloud} alt="Timbu cloud logo" />
          </div>
          <h1 className="text-dark-cyan ml-2 text-lg font-semibold">
            Timbu Cloud
          </h1>
        </div>

        <div className="flex w-1/4 items-center justify-around sm:hidden">
          <img src={Cart} alt="Cart" />
          <div onClick={() => setMenu((prevState) => !prevState)}>
            {menuOpen ? (
              <img src={MenuOpen} alt="MenuOpen" />
            ) : (
              <img src={MenuClosed} alt="MenuClosed" />
            )}
          </div>
        </div>

        <div className="hidden w-1/2 items-center justify-around sm:flex lg:w-1/3">
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.link}
              className="text-dark-cyan mx-3 text-xl font-semibold capitalize md:mx-4"
            >
              {navLink.name}
            </a>
          ))}
        </div>

        <div className="hidden w-1/6 items-center justify-around sm:flex">
          <img src={Notifications} alt="" />
          <img src={Cart} alt="" />
        </div>
      </header>

      <div
        className={`absolute ${menuOpen ? "right-0" : "right-full"} top-[70px] w-3/5 max-w-64 rounded-br-3xl rounded-tl-3xl border border-white bg-white px-5 shadow-lg transition-all duration-200 ease-in sm:hidden`}
      >
        {navLinks.map((navLink, index) => (
          <a
            key={index}
            href={navLink.link}
            className="text-dark-cyan my-7 block text-2xl font-semibold capitalize"
          >
            {navLink.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;

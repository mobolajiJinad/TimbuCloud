import { useContext, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import { CartContext } from "./CartContext";

import TimbuCloud from "../assets/TimbuCloud.svg";
import Cart from "../assets/Cart.svg";
import MenuClosed from "../assets/MenuClosed.svg";
import MenuOpen from "../assets/MenuOpen.svg";
import Notifications from "../assets/Notifications.svg";

const navLinks = [
  { name: "home", link: "/" },
  { name: "category", link: "#category" },
  { name: "blog", link: "#blog" },
  { name: "contacts", link: "#contacts" },
];

const Header = () => {
  const [menuOpen, setMenu] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <header className="flex items-center justify-between bg-[#CDEFE9] px-2 py-4 shadow-md md:py-7">
        <div className="flex w-1/2 items-center sm:w-1/4 md:ml-7">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-dark-cyan">
            <img src={TimbuCloud} alt="Timbu cloud logo" />
          </div>
          <h1 className="ml-2 text-base font-semibold text-dark-cyan">
            Timbu Cloud
          </h1>
        </div>

        <div className="flex w-1/4 items-center justify-around sm:hidden">
          <NavHashLink smooth to="checkout" className="relative">
            <span className="absolute bottom-5 left-7 text-base font-semibold text-red-600">
              {cartCount}
            </span>
            <img src={Cart} alt="" className="w-full cursor-pointer" />
          </NavHashLink>
          <div
            className="cursor-pointer"
            onClick={() => setMenu((prevState) => !prevState)}
          >
            {menuOpen ? (
              <img src={MenuOpen} alt="MenuOpen" />
            ) : (
              <img src={MenuClosed} alt="MenuClosed" />
            )}
          </div>
        </div>

        <div className="hidden w-1/2 items-center justify-around sm:flex lg:w-1/3">
          {navLinks.map((navLink, index) => (
            <NavHashLink
              smooth
              key={index}
              to={navLink.link}
              className="mx-3 text-xl font-semibold capitalize text-dark-cyan md:mx-4"
            >
              {navLink.name}
            </NavHashLink>
          ))}
        </div>

        <div className="hidden w-1/6 items-center justify-around sm:flex">
          <img src={Notifications} alt="" className="cursor-pointer" />
          <NavHashLink smooth to="checkout" className="relative">
            <span className="absolute bottom-5 left-7 text-base font-semibold text-red-600">
              {cartCount}
            </span>
            <img src={Cart} alt="" className="w-full cursor-pointer" />
          </NavHashLink>
        </div>
      </header>

      <div
        className={`absolute ${menuOpen ? "right-0" : "right-full"} top-[70px] w-3/5 max-w-64 rounded-br-3xl rounded-tl-3xl border border-white bg-white px-5 shadow-lg transition-all duration-200 ease-in sm:hidden`}
      >
        {navLinks.map((navLink, index) => (
          <NavHashLink
            smooth
            key={index}
            to={navLink.link}
            className="my-7 block text-2xl font-semibold capitalize text-dark-cyan"
          >
            {navLink.name}
          </NavHashLink>
        ))}
      </div>
    </>
  );
};

export default Header;

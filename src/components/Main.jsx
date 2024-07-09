import { NavHashLink } from "react-router-hash-link";

import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";

const Main = () => {
  return (
    <>
      <h3 className="text-shadow mt-6 hidden px-[10%] text-center text-4xl font-semibold text-opaque-white sm:block lg:px-[15%]">
        Stay Connected, Stay Fit, Stay Stylish with{" "}
        <span className="text-black">Timbu Cloud</span> Smart watches.
      </h3>

      <main className="mt-6 flex h-[70vh] flex-col items-center justify-center px-[5%] pb-5 sm:flex-row sm:justify-around">
        <div className="order-1 flex h-60 w-60 items-center justify-center rounded-full border sm:order-2 sm:h-64 sm:w-64">
          <img src="/images/T5MiniSmartWatch.png" alt="T5MiniSmartWatch" />
        </div>

        <div className="order-2 sm:order-1 sm:w-1/2 sm:px-5">
          <h3 className="mb-4 text-center text-2xl font-bold text-dark-cyan sm:text-left sm:text-opaque-white">
            T5 Mini Smart watch
          </h3>
          <p className="hidden whitespace-normal break-words text-xl font-semibold text-opaque-white sm:block">
            Stay connected and healthy with our latest smartwatch! Track your
            workouts, and receive notifications on the go.
          </p>
          <p className="block whitespace-normal break-words text-center text-xl font-semibold text-opaque-white sm:hidden">
            Stay Connected, Stay <span className="text-black">Fit</span>, Stay
            Stylish with <span className="text-dark-cyan">Timbu Cloud</span>{" "}
            Smart watches.
          </p>

          <NavHashLink
            smooth
            to="#FeaturedProducts"
            className="mx-auto mt-8 block w-48 rounded-3xl bg-dark-cyan px-5 py-2 text-xl capitalize text-white sm:mx-0"
          >
            explore products
          </NavHashLink>
        </div>

        <div className="absolute bottom-0 right-7 hidden h-10 w-24 items-center justify-between sm:flex md:right-20 lg:right-28">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
            <img src={ArrowLeft} alt="ArrowLeft" />
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-dark-cyan">
            <img src={ArrowRight} alt="ArrowRight" />
          </div>
        </div>
      </main>
    </>
  );
};
export default Main;
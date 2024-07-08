import ProductsContainer from "./ProductsContainer";

import BestSellersLogo from "../assets/BestSellersLogo.svg";
import StandardWashingMachine from "../assets/StandardWashingMachine.png";
import ProSmartWatch from "../assets/ProSmartWatch.png";
import IPhone15ProMax from "../assets/IPhone15ProMax.png";
import GarminWatch from "../assets/GarminWatch.png";
import Ipad from "../assets/Ipad.png";
import ThreeDSecurityCamera from "../assets/ThreeDSecurityCamera.png";

const bestSellers = [
  {
    name: "I20 Pro Smart watch",
    image: ProSmartWatch,
    price: "150.00",
    star: 5,
  },
  {
    name: "Iphone 13 pro max",
    image: IPhone15ProMax,
    price: "1500.00",
    star: 5,
  },
  {
    name: "Garmin Watch",
    image: GarminWatch,
    price: "300.00",
    star: 4,
  },
  {
    name: "Ipad",
    image: Ipad,
    price: "900.00",
    star: 5,
  },
  {
    name: "3D security camera",
    image: ThreeDSecurityCamera,
    price: "600.00",
    star: 5,
  },
];

const BestSellers = () => {
  return (
    <>
      <section className="mx-auto my-3 flex w-11/12 items-center justify-around rounded-3xl bg-[#CDEFE933] px-[3%] py-4">
        <div>
          <div className="my-2">
            <h2 className="mb-4 text-lg text-[#000000B2] sm:text-4xl">
              Best Sellers
            </h2>
            <p className="w-52 whitespace-normal break-words text-xs font-normal sm:text-sm">
              Take a look at our top-selling product of the week!
            </p>
          </div>

          <button className="mt-4 rounded-xl bg-dark-cyan p-2 text-sm font-medium text-white sm:text-base">
            Shop Now
          </button>
        </div>

        <img src={BestSellersLogo} alt="" className="w-11 sm:h-60 sm:w-60" />
      </section>

      <section className="flex flex-wrap items-center justify-between px-[3%]">
        <div className="m-2 flex w-full flex-col items-center p-5 sm:w-44">
          <img
            src={StandardWashingMachine}
            alt=""
            className="h-28 w-36 sm:h-60 sm:w-64"
          />

          <h4 className="my-2 text-xs font-semibold text-black sm:text-base">
            Standard Washing machine
          </h4>

          <span className="my-2 text-xs font-semibold text-black sm:text-base">
            $300.00
          </span>

          <button className="my-2 rounded-xl bg-dark-cyan p-3 px-6 text-base font-medium text-white sm:px-3">
            Add to cart
          </button>
        </div>

        <ProductsContainer products={bestSellers} />
      </section>
    </>
  );
};

export default BestSellers;

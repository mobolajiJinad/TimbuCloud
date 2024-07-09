import ProductsContainer from "./ProductsContainer";

import BestSellersLogo from "../assets/BestSellersLogo.svg";

const bestSellers = [
  {
    id: 1,
    name: "I20 Pro Smart watch",
    image: "/images/ProSmartWatch.png",
    price: "150.00",
    star: 5,
  },
  {
    id: 2,
    name: "Iphone 13 pro max",
    image: "/images/IPhone15ProMax.png",
    price: "1500.00",
    star: 5,
  },
  {
    id: 3,
    name: "Garmin Watch",
    image: "/images/GarminWatch.png",
    price: "300.00",
    star: 4,
  },
  {
    id: 4,
    name: "Ipad",
    image: "/images/Ipad.png",
    price: "900.00",
    star: 5,
  },
  {
    id: 5,
    name: "3D security camera",
    image: "/images/ThreeDSecurityCamera.png",
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
            <p className="w-52 whitespace-normal break-words text-xs font-normal sm:text-sm md:w-60">
              Take a look at our top-selling product of the week!
            </p>
          </div>

          <button className="mt-4 rounded-xl bg-dark-cyan p-2 text-sm font-medium text-white sm:text-base">
            Shop Now
          </button>
        </div>

        <img src={BestSellersLogo} alt="" className="w-11 sm:h-56 sm:w-56" />
      </section>

      <section className="flex flex-wrap items-center justify-between px-[3%]">
        <div className="m-2 flex w-full flex-col items-center p-5 sm:w-44">
          <img
            src="/images/StandardWashingMachine.png"
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

        <div className="flex flex-wrap items-center justify-around">
          <ProductsContainer products={bestSellers} />
        </div>
      </section>
    </>
  );
};

export default BestSellers;

import ProductsContainer from "./ProductsContainer";

import BestSellersLogo from "../assets/BestSellersLogo.svg";
import { bestSellers } from "../data";

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

      <section className="flex flex-wrap items-center justify-around px-[3%]">
        <ProductsContainer products={bestSellers} />
      </section>
    </>
  );
};

export default BestSellers;

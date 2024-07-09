import ProductsContainer from "./ProductsContainer";

import { featuredProducts } from "../data";

const FeaturedProducts = () => {
  return (
    <section id="FeaturedProducts" className="bg-white px-[5%] pt-12">
      <h2 className="mb-4 flex items-center justify-between py-4 text-xl font-semibold text-opaque-white sm:text-4xl">
        Featured Products
        <a
          href="#"
          className="hidden rounded-xl bg-dark-cyan p-2 text-sm text-white sm:block"
        >
          See more
        </a>
      </h2>

      <div className="flex flex-wrap items-center justify-around">
        <ProductsContainer products={featuredProducts} />
      </div>

      <a
        href="#"
        className="ml-auto mt-7 block w-24 rounded-xl bg-dark-cyan p-2 px-4 text-xs text-white sm:hidden"
      >
        See more
      </a>
    </section>
  );
};

export default FeaturedProducts;

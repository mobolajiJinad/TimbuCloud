import ProductsContainer from "@/app/components/ProductsContainer";
import { products } from "@/app/data";

const page = () => {
  return (
    <section className="bg-white px-[3%] mt-6">
      <h2 className="mb-6 flex items-center justify-between py-4 text-xl font-semibold text-gray-900 sm:text-3xl">
        Featured Products
        <a
          href="#"
          className="hidden rounded-xl bg-dark-cyan p-3 text-sm text-white sm:block"
        >
          See more
        </a>
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <ProductsContainer products={products} />
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

export default page;

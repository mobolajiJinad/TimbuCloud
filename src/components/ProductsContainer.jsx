import Star from "../assets/Star.svg";
import Hearts from "../assets/Hearts.svg";

const ProductsContainer = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div
          className="m-2 flex w-full flex-col items-center rounded-3xl border border-[#D9D9D9] p-5 sm:w-44"
          key={index}
        >
          <img
            src={Hearts}
            alt=""
            className="relative left-[5.5rem] top-2 sm:left-14 sm:top-2"
          />
          <img src={product.image} alt="" className="h-auto w-20 sm:w-14" />

          <div className="my-1 flex">
            {Array.from({ length: product.star }, (_, index) => (
              <img src={Star} alt="" key={index} />
            ))}
          </div>

          <h4 className="my-2 text-xs font-semibold text-black sm:text-base">
            {product.name}
          </h4>

          <span className="my-2 text-xs font-semibold text-black sm:text-base">
            ${product.price}
          </span>

          <button className="my-2 rounded-xl bg-dark-cyan p-3 px-6 text-base font-medium text-white sm:px-3">
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductsContainer;

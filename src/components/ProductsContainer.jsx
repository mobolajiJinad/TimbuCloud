import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "./CartContext";

import Star from "../assets/Star.svg";
import Hearts from "../assets/Hearts.svg";

const ProductsContainer = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <div
          className="m-2 flex w-32 flex-col items-center rounded-3xl border border-[#D9D9D9] px-2 py-5 md:w-36"
          key={product.id}
        >
          <img
            src={Hearts}
            alt=""
            className="relative bottom-2 left-10 sm:top-2"
          />

          <img
            src={product.image}
            alt=""
            className="h-auto w-20 sm:w-14"
            onClick={() => navigate(`/${product.id}`)}
          />

          <div className="my-1 flex">
            {Array.from({ length: product.star }, (_, index) => (
              <img src={Star} alt="" key={index} />
            ))}
          </div>

          <h4 className="my-2 text-center text-xs font-semibold text-black sm:text-base">
            {product.name}
          </h4>

          <span className="my-2 text-xs font-semibold text-black sm:text-base">
            ${product.price}
          </span>

          <button
            className="my-2 rounded-xl bg-dark-cyan p-3 px-2 text-sm font-medium text-white sm:px-3"
            onClick={() => addToCart({ ...product, quantity: 1 })}
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductsContainer;

import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../components/CartContext";
import { products } from "../data";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductPage = () => {
  const { productPageID } = useParams();
  const { addToCart, updateQuantity, cartItems } = useContext(CartContext);

  const product = products.find((item) => item.id == productPageID);
  const cartItem = cartItems.find((item) => item.id == productPageID);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <>
      <Header />

      <main>
        <div className="flex items-center justify-center bg-[#CDEFE933] pb-9 pt-12">
          <img
            src={product.image}
            alt=""
            className="h-56 w-56 rounded-full border bg-black"
          />
        </div>

        <div className="my-7 px-[5%]">
          <h1 className="my-5 text-center text-2xl font-semibold">
            {product.name}
          </h1>
          <p className="my-3 text-base font-normal text-black">
            <span className="font-semibold">Product details: </span>
            {product.details}
          </p>

          <p className="text-sm">
            <span className="font-semibold">Display:</span> 1.4inch{" "}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Sensors:</span> Heart rate monitor
          </p>
          <p className="text-sm">
            <span className="font-semibold">Connectivity:</span> Bluetooth 5.0
          </p>

          <div className="my-3 flex items-center justify-between">
            <h4 className="text-2xl font-medium">${product.price}</h4>

            <div>
              <button onClick={() => updateQuantity(product.id, quantity + 1)}>
                +
              </button>
              <span className="mx-4 border px-2 py-1">{quantity}</span>
              <button onClick={() => updateQuantity(product.id, quantity - 1)}>
                -
              </button>
            </div>
          </div>
        </div>

        <button
          className="my-2 ml-auto mr-4 block rounded-xl bg-dark-cyan px-5 py-2 text-sm font-medium text-white sm:px-3"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;

import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../components/CartContext";
import { products } from "../data";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // For some reason, entering this page scrolls to the bottom automatically

  const { productPageID } = useParams();
  const { addToCart, cartItems } = useContext(CartContext);

  const product = products.find((item) => item.id == productPageID);
  const cartItem = cartItems.find((item) => item.id == productPageID);
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

  const handleAddToCart = () => {
    const updatedProduct = { ...product, quantity };
    addToCart(updatedProduct);
  };

  return (
    <div>
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
            <h4 className="text-2xl font-medium">
              ${product.price * quantity}
            </h4>

            <div>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
              <span className="mx-4 border px-2 py-1">{quantity}</span>
              <button onClick={() => setQuantity(quantity - 1)}>-</button>
            </div>
          </div>
        </div>

        <button
          className="my-2 ml-auto mr-4 block rounded-xl bg-dark-cyan px-5 py-2 text-sm font-medium text-white sm:px-3"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;

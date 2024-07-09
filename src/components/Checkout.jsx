import { useContext, useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import { CartContext } from "./CartContext";

import WhiteCart from "../assets/WhiteCart.svg";
import ClearCart from "../assets/ClearCart.svg";
import CheckoutSuccessful from "../assets/CheckoutSuccessful.svg";
import MenuOpen from "../assets/MenuOpen.svg";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  const checkoutFunc = () => {
    setCheckout(true);
    clearCart();
  };

  return (
    <>
      <NavHashLink
        smooth
        to="/"
        className="text-base font-medium text-dark-cyan"
      >
        back
      </NavHashLink>

      <main className="mt-9 px-2 pb-9">
        <h1 className="mb-5 text-center text-2xl font-bold">Checkout</h1>

        <div className="">
          <div className="grid grid-cols-4 items-center gap-2 text-base font-semibold text-black">
            <span></span>
            <span>Item</span>
            <span>Quantity</span>
            <span>Price</span>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="my-2 grid grid-cols-4 items-center gap-2"
            >
              <img src={item.image} alt={item.name} className="h-16 w-16" />

              <div className="flex flex-col">
                <h2 className="my-3 text-base font-semibold">{item.name}</h2>
                <span className="text-xs font-semibold">Display: 5 Inches</span>
                <span className="text-xs font-semibold">Color: Black</span>
                <span className="text-xs font-semibold">Memory: 32GB</span>
              </div>

              <div className="flex items-center justify-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-11 border p-2 text-center"
                />
              </div>

              <div className="flex items-center justify-end">
                <span className="text-lg">
                  ${(item.price * (item.quantity || 0)).toFixed(2)}
                </span>

                <img
                  src={ClearCart}
                  className="ml-3 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                  alt="Remove item"
                />
              </div>
            </div>
          ))}

          <button
            className="my-9 ml-2 flex items-center rounded-xl bg-dark-cyan px-2 py-1 text-white"
            onClick={() => clearCart()}
          >
            <img src={WhiteCart} alt="" className="mr-2" />
            Clear Cart
          </button>
        </div>

        <div className="mx-auto mb-5 flex w-52 flex-col items-center rounded-xl bg-[#CDEFE933] px-4 py-7 sm:w-96">
          <h4 className="my-4 text-center text-sm font-bold capitalize">
            order summary
          </h4>

          <div className="w-full">
            <div className="mt-1 flex items-center justify-between border-b border-b-black py-2 text-xs capitalize">
              <h5>subtotal</h5>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="mt-1 flex items-center justify-between border-b border-b-black py-2 text-xs capitalize">
              <h5>discount</h5>
              <p>$0</p>
            </div>
            <div className="mt-1 flex items-center justify-between border-b border-b-black py-2 text-xs capitalize">
              <h5>shipping</h5>
              <p>$0</p>
            </div>
            <div className="mt-1 flex items-center justify-between border-b border-b-black py-2 text-xs capitalize">
              <h5>total</h5>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
          </div>

          <button
            className="mx-auto mt-5 rounded-2xl bg-dark-cyan px-4 py-1 text-sm font-medium text-white"
            onClick={checkoutFunc}
          >
            Checkout
          </button>
        </div>

        <NavHashLink
          to="/#FeaturedProducts"
          className="block text-center text-base font-medium capitalize text-dark-cyan"
        >
          continue shopping
        </NavHashLink>
      </main>

      {checkout && (
        <div className="fixed left-1/2 top-1/2 flex w-4/5 max-w-96 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-br-xl rounded-tl-xl bg-white p-5 shadow-lg">
          <img
            src={MenuOpen}
            alt=""
            className="relative right-24 top-3 cursor-pointer"
            onClick={() => setCheckout(false)}
          />

          <img
            src={CheckoutSuccessful}
            alt="Checkout Successful"
            className="mt-4"
          />

          <h4 className="mt-4 text-base font-semibold capitalize text-black">
            Congratulations
          </h4>
          <p className="my-3 text-black">Checkout successful</p>
          <NavHashLink
            smooth
            to="/#featuredProducts"
            className="my-5 mt-10 rounded-xl bg-dark-cyan px-3 py-1 text-white"
            onClick={() => setCheckout(false)}
          >
            Back to shop
          </NavHashLink>
        </div>
      )}
    </>
  );
};

export default Checkout;

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext";

import WhiteCart from "../assets/WhiteCart.svg";
import ClearCart from "../assets/ClearCart.svg";
import CheckoutSuccessful from "../assets/CheckoutSuccessful.svg";
import MenuOpen from "../assets/MenuOpen.svg";

const Checkout = () => {
  const {
    cartItems,
    updateQuantity,
    cartCount,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useContext(CartContext);
  const [checkout, setCheckout] = useState(false);

  const checkoutFunc = () => {
    setCheckout(true);
    clearCart();
  };

  return (
    <>
      <main className="mt-16 px-1 pb-9 md:px-[3%] lg:px-[5%]">
        <h1 className="my-5 text-center text-2xl font-bold">Checkout</h1>

        <div className="w-full justify-between lg:flex">
          <div className="mx-auto w-full lg:w-2/3">
            {cartCount > 0 && (
              <div className="flex items-center justify-between text-base font-semibold text-black">
                <span className="w-20"></span>
                <span className="w-3/12 sm:w-3/12">Item</span>
                <span className="w-5/12 sm:w-2/12">Quantity</span>
                <span className="w-4/12 sm:w-4/12">Price</span>
              </div>
            )}

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="my-2 flex items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="block h-16 w-16 sm:h-24 sm:w-24"
                />

                <div className="flex w-3/12 flex-col">
                  <h2 className="my-3 text-sm font-semibold sm:text-base">
                    {item.name}
                  </h2>
                </div>

                <div className="flex w-2/12 items-center">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-9 border text-center sm:w-11 sm:p-2"
                  />
                </div>

                <div className="flex w-4/12 items-center">
                  <span className="text-base sm:text-lg">
                    ${(item.price * (item.quantity || 0)).toFixed(2)}
                  </span>

                  <img
                    src={ClearCart}
                    className="ml-2 cursor-pointer sm:ml-3"
                    onClick={() => removeFromCart(item.id)}
                    alt="Remove item"
                  />
                </div>
              </div>
            ))}

            {cartCount > 0 && (
              <button
                className="my-9 ml-2 flex items-center rounded-xl bg-dark-cyan px-3 py-1 text-white"
                onClick={() => clearCart()}
              >
                <img src={WhiteCart} alt="" className="mr-2" />
                Clear Cart
              </button>
            )}
          </div>

          {cartCount === 0 && (
            <h2 className="my-9 text-center text-2xl font-semibold">
              Cart is empty
            </h2>
          )}

          {cartCount > 0 && (
            <div className="mx-auto my-5 flex w-60 flex-col items-center rounded-xl bg-[#CDEFE933] px-4 py-7 sm:w-96">
              <h4 className="my-7 text-center text-base font-bold capitalize">
                order summary
              </h4>

              <div className="w-full">
                <div className="mt-2 flex items-center justify-between border-b border-b-black py-3 text-sm capitalize">
                  <h5>subtotal</h5>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-b-black py-3 text-sm capitalize">
                  <h5>discount</h5>
                  <p>$0</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-b-black py-3 text-sm capitalize">
                  <h5>shipping</h5>
                  <p>$0</p>
                </div>
                <div className="mt-2 flex items-center justify-between border-b border-b-black py-3 text-sm capitalize">
                  <h5>total</h5>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>

              <button
                className="mx-auto mt-7 rounded-2xl bg-dark-cyan px-4 py-1 text-base font-medium text-white"
                onClick={checkoutFunc}
              >
                Checkout
              </button>
            </div>
          )}
        </div>

        <Link
          to="/#FeaturedProducts"
          className="block text-center text-base font-medium capitalize text-dark-cyan md:hidden"
        >
          continue shopping
        </Link>
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
          <Link
            to="/#FeaturedProducts"
            className="my-5 mt-10 rounded-xl bg-dark-cyan px-4 py-1 text-white"
            onClick={() => setCheckout(false)}
          >
            Back to shop
          </Link>
        </div>
      )}
    </>
  );
};

export default Checkout;

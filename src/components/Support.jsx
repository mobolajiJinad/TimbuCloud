import SecurePayment from "../assets/SecurePayment.svg";
import FreeShipping from "../assets/FreeShipping.svg";
import SupportSVG from "../assets/SupportSVG.svg";

const Support = () => {
  return (
    <section className="mt-4 flex flex-wrap items-center justify-between px-[3%] lg:mx-auto lg:w-4/5">
      <div className="my-2 flex h-40 w-36 flex-col items-center justify-around rounded-2xl border border-[#CDEFE9] p-2 text-dark-cyan sm:h-72 sm:w-72 sm:p-4">
        <img src={FreeShipping} alt="" className="sm:w-32" />
        <h4 className="text-sm font-semibold sm:text-2xl">Free Shipping</h4>
        <p className="text-xs font-light sm:text-xl">
          Enjoy free shipping on all your orders from Timbu cloud.{" "}
        </p>
      </div>

      <div className="my-2 flex h-40 w-36 flex-col items-center justify-around rounded-2xl border border-[#CDEFE9] p-2 text-dark-cyan sm:h-72 sm:w-72 sm:p-4">
        <img src={SecurePayment} alt="" className="sm:w-32" />
        <h4 className="text-sm font-semibold sm:text-2xl">Secure Payment</h4>
        <p className="text-xs font-light sm:text-xl">
          Benefit from secure payment options with our company.
        </p>
      </div>

      <div className="my-2 flex h-40 w-36 flex-col items-center justify-around rounded-2xl border border-[#CDEFE9] p-2 text-dark-cyan sm:h-72 sm:w-72 sm:p-4">
        <img src={SupportSVG} alt="" className="sm:w-32" />
        <h4 className="text-sm font-semibold sm:text-2xl">24 hours Support</h4>
        <p className="text-xs font-light sm:text-xl">
          We offer 24-hour custo mer support for our company.{" "}
        </p>
      </div>
    </section>
  );
};

export default Support;

"use client";

import Image from "next/image";

import SecurePayment from "@/app/assets/SecurePayment.svg";
import FreeShipping from "@/app/assets/FreeShipping.svg";
import SupportSVG from "@/app/assets/Support.svg";

const SupportComponents = [
  {
    name: "Free Shipping",
    image: FreeShipping,
    paragraph: "Enjoy free shipping on all your orders from Timbu. ",
  },
  {
    name: "Secure Payment",
    image: SecurePayment,
    paragraph: "Benefit from secure payment options with our company. ",
  },
  {
    name: "24 hours Support",
    image: SupportSVG,
    paragraph: "We offer 24-hour custo mer support for our company. ",
  },
];

const Support = () => {
  return (
    <section className="my-4 grid gap-4 px-[3%] lg:mx-auto lg:w-4/5 lg:px-0 xsm:grid-cols-2 md:grid-cols-3">
      {SupportComponents.map((support, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-around rounded-2xl border border-[#CDEFE9] p-2 text-dark-cyan min-h-[11rem] sm:min-h-[15rem]"
        >
          <Image src={support.image} alt="" className="w-24 sm:w-32 my-2" />
          <h4 className="text-base my-2 font-semibold sm:text-2xl">
            {support.name}
          </h4>
          <p className="text-xs text-center sm:text-xl">{support.paragraph}</p>
        </div>
      ))}
    </section>
  );
};

export default Support;

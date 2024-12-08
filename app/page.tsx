import Link from "next/link";
import Image from "next/image";

import Support from "@/app/components/Support";

import T5MiniSmartWatch from "@/app/assets/T5MiniSmartWatch.png";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="pb-4">
        <h3 className="text-shadow mt-6 px-[10%] pb-3 text-center text-base font-semibold text-opaque-white sm:text-xl md:text-4xl lg:px-[15%]">
          Stay Connected, Stay Fit, Stay Stylish with{" "}
          <span className="text-black">Timbu</span> Smart watches.
        </h3>

        <div className="mt-6 flex flex-col items-center justify-center px-[5%] sm:flex-row sm:justify-around">
          <div className="order-1 mb-2 flex h-60 w-60 items-center justify-center rounded-full border sm:order-2 sm:h-64 sm:w-64">
            <Image src={T5MiniSmartWatch} alt="T5MiniSmartWatch" />
          </div>

          <div className="order-2 text-center sm:order-1 sm:w-1/2 sm:px-5 sm:text-start">
            <h3 className="mb-4 text-xl font-bold text-dark-cyan sm:text-left sm:text-opaque-white">
              T5 Mini Smart watch
            </h3>
            <p className="whitespace-normal break-words text-lg font-semibold text-opaque-white">
              Stay connected and healthy with our latest smartwatch! Track your
              workouts, and receive notifications on the go.
            </p>

            <Link
              href="/featuredProducts"
              className="mt-8 inline-block rounded-3xl bg-dark-cyan px-5 py-2 text-lg capitalize text-white sm:mx-0"
            >
              explore products
            </Link>
          </div>
        </div>
      </main>

      {children}

      <Support />
    </>
  );
}

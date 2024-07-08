import T5MiniSmartWatch from "../assets/T5MiniSmartWatch.png";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";

const Main = () => {
  return (
    <main className="mt-6 flex h-[70vh] flex-col items-center justify-center px-[5%] pb-5 sm:flex-row sm:justify-around">
      <div className="order-1 flex h-60 w-60 items-center justify-center rounded-full border sm:order-2 sm:h-64 sm:w-64">
        <img src={T5MiniSmartWatch} alt="T5MiniSmartWatch" />
      </div>

      <div className="order-2 sm:order-1 sm:w-1/2 sm:px-5">
        <h3 className="text-dark-cyan sm:text-opaque-white mb-4 text-center text-2xl font-bold sm:text-left">
          T5 Mini Smart watch
        </h3>
        <p className="text-opaque-white hidden whitespace-normal break-words text-xl font-semibold sm:block">
          Stay connected and healthy with our latest smartwatch! Track your
          workouts, and receive notifications on the go.
        </p>
        <p className="text-opaque-white block whitespace-normal break-words text-center text-xl font-semibold sm:hidden">
          Stay Connected, Stay <span className="text-black">Fit</span>, Stay
          Stylish with <span className="text-dark-cyan">Timbu Cloud</span> Smart
          watches.
        </p>

        <button className="bg-dark-cyan mx-auto mt-8 block rounded-3xl px-5 py-3 text-xl capitalize text-white sm:mx-0">
          explore products
        </button>
      </div>

      <div className="absolute bottom-0 right-7 hidden h-10 w-24 items-center justify-between sm:flex md:right-20 lg:right-28">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
          <img src={ArrowLeft} alt="ArrowLeft" />
        </div>
        <div className="bg-dark-cyan flex h-7 w-7 items-center justify-center rounded-full">
          <img src={ArrowRight} alt="ArrowRight" />
        </div>
      </div>
    </main>
  );
};
export default Main;

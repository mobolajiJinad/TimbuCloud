import ProductsContainer from "./ProductsContainer";

import ProSmartWatch from "../assets/ProSmartWatch.png";
import IPhone15ProMax from "../assets/IPhone15ProMax.png";
import GarminWatch from "../assets/GarminWatch.png";
import Y60SmartEarPods from "../assets/Y60SmartEarPods.png";
import ThreeDSecurityCamera from "../assets/ThreeDSecurityCamera.png";
import Ipad from "../assets/Ipad.png";
import CameraTwo from "../assets/CameraTwo.png";
import GamePad from "../assets/GamePad.png";
import ExcelGameSet from "../assets/ExcelGameSet.png";

const featuredProducts = [
  {
    name: "I20 Pro Smart watch",
    image: ProSmartWatch,
    price: "150.00",
    star: 5,
  },
  {
    name: "Iphone 13 pro max",
    image: IPhone15ProMax,
    price: "1500.00",
    star: 5,
  },
  {
    name: "Garmin Watch",
    image: GarminWatch,
    price: "300.00",
    star: 4,
  },
  {
    name: "Y60 Smart ear pod",
    image: Y60SmartEarPods,
    price: "200.00",
    star: 3,
  },
  {
    name: "Ipad",
    image: Ipad,
    price: "900.00",
    star: 5,
  },
  {
    name: "3D security camera",
    image: ThreeDSecurityCamera,
    price: "600.00",
    star: 5,
  },
  {
    name: "Camera",
    image: CameraTwo,
    price: "100.00",
    star: 3,
  },
  {
    name: "Game Pad",
    image: GamePad,
    price: "250.00",
    star: 3,
  },
  {
    name: "Excel Game Set",
    image: ExcelGameSet,
    price: "700.00",
    star: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white px-[5%] pt-20">
      <h2 className="mb-4 flex items-center justify-between py-4 text-xl font-semibold text-opaque-white sm:text-4xl">
        Featured Products
        <a
          href="#"
          className="hidden rounded-xl bg-dark-cyan p-2 text-sm text-white sm:block"
        >
          See more
        </a>
      </h2>

      <div className="flex flex-wrap items-center justify-around">
        <ProductsContainer products={featuredProducts} />
      </div>

      <a
        href="#"
        className="ml-auto mt-7 block w-20 rounded-xl bg-dark-cyan p-2 text-sm text-white sm:hidden"
      >
        See more
      </a>
    </section>
  );
};

export default FeaturedProducts;

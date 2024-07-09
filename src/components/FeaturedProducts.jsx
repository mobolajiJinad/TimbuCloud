import ProductsContainer from "./ProductsContainer";

const featuredProducts = [
  {
    id: 1,
    name: "I20 Pro Smart watch",
    image: "/images/ProSmartWatch.png",
    price: "150.00",
    star: 5,
  },
  {
    id: 2,
    name: "Iphone 13 pro max",
    image: "/images/IPhone15ProMax.png",
    price: "1500.00",
    star: 5,
  },
  {
    id: 3,
    name: "Garmin Watch",
    image: "/images/GarminWatch.png",
    price: "300.00",
    star: 4,
  },
  {
    id: 4,
    name: "Y60 Smart ear pod",
    image: "/images/Y60SmartEarPods.png",
    price: "200.00",
    star: 3,
  },
  { id: 5, name: "Ipad", image: "/images/Ipad.png", price: "900.00", star: 5 },
  {
    id: 6,
    name: "3D security camera",
    image: "/images/ThreeDSecurityCamera.png",
    price: "600.00",
    star: 5,
  },
  {
    id: 7,
    name: "Camera",
    image: "/images/CameraTwo.png",
    price: "100.00",
    star: 3,
  },
  {
    id: 8,
    name: "Game Pad",
    image: "/images/GamePad.png",
    price: "250.00",
    star: 3,
  },
  {
    id: 9,
    name: "Excel Game Set",
    image: "/images/ExcelGameSet.png",
    price: "700.00",
    star: 5,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="FeaturedProducts" className="bg-white px-[5%] pt-12">
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
        className="ml-auto mt-7 block w-20 rounded-xl bg-dark-cyan p-2 text-xs text-white sm:hidden"
      >
        See more
      </a>
    </section>
  );
};

export default FeaturedProducts;

import Headphones from "../assets/Headphones.png";
import Earpods from "../assets/Earpods.png";
import Watches from "../assets/Watches.png";
import Camera from "../assets/Camera.png";
import Phones from "../assets/Phones.png";

const visibleCategories = [
  {
    name: "Headphones",
    image: Headphones,
  },
  {
    name: "Ear pods",
    image: Earpods,
  },
  {
    name: "Watches",
    image: Watches,
  },
  {
    name: "Camera",
    image: Camera,
  },
  {
    name: "Phones",
    image: Phones,
  },
];

const Category = () => {
  return (
    <section className="bg-white px-[5%] py-5 sm:bg-[#CDEFE933]">
      <h2 className="text-opaque-white mb-4 flex items-center justify-between py-4 text-xl font-semibold sm:text-4xl">
        Browse by categories{" "}
        <a
          href="#"
          className="bg-dark-cyan hidden rounded-xl p-2 text-sm text-white sm:block"
        >
          See more
        </a>
      </h2>

      <div className="flex flex-wrap items-center justify-between">
        {visibleCategories.map((category, index) => (
          <div
            className="flex w-1/2 max-w-36 flex-col items-center"
            key={index}
          >
            <img
              src={category.image}
              alt=""
              className="h-24 w-auto rounded-br-3xl rounded-tl-3xl border border-[#CDEFE9]"
            />
            <h4 className="my-2 text-lg font-semibold text-black sm:text-2xl">
              {category.name}
            </h4>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="bg-dark-cyan ml-auto mt-7 block w-20 rounded-xl p-2 text-sm text-white sm:hidden"
      >
        See more
      </a>
    </section>
  );
};

export default Category;

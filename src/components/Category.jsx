const visibleCategories = [
  {
    name: "Headphones",
    image: "/images/Headphones.png",
  },
  {
    name: "Ear pods",
    image: "/images/Earpods.png",
  },
  {
    name: "Watches",
    image: "/images/Watches.png",
  },
  {
    name: "Camera",
    image: "/images/Camera.png",
  },
  {
    name: "Phones",
    image: "/images/Phones.png",
  },
];

const Category = () => {
  return (
    <section id="category" className="bg-white px-[5%] py-5 sm:bg-[#CDEFE933]">
      <h2 className="mb-4 flex items-center justify-between py-4 text-xl font-semibold text-opaque-white sm:text-4xl">
        Browse by categories{" "}
        <a
          href="#"
          className="hidden rounded-xl bg-dark-cyan p-2 text-sm text-white sm:block"
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
        className="ml-auto mt-7 block w-20 rounded-xl bg-dark-cyan p-2 text-xs text-white sm:hidden"
      >
        See more
      </a>
    </section>
  );
};

export default Category;

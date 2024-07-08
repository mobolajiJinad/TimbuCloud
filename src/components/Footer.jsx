import SendBtn from "../assets/SendBtn.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-cyan mt-3 flex flex-col items-center px-[5%] py-5 capitalize text-white sm:flex-row sm:flex-wrap sm:justify-evenly">
      <div className="text-center">
        <h4 className="my-2 text-lg font-bold">about</h4>
        <ul className="text-sm font-medium">
          <li className="my-1">
            <a href="#">marketplace</a>
          </li>
          <li className="my-1">
            <a href="#">services</a>
          </li>
          <li className="my-1">
            <a href="#">seller</a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h4 className="my-2 text-lg font-bold">categories</h4>
        <ul className="text-sm font-medium">
          <li className="my-1">
            <a href="#">phones</a>
          </li>
          <li className="my-1">
            <a href="#">laptop</a>
          </li>
          <li className="my-1">
            <a href="#">ear pods</a>
          </li>
          <li className="my-1">
            <a href="#">headphones</a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h4 className="my-2 text-lg font-bold">help</h4>
        <ul className="text-sm font-medium">
          <li className="my-1">
            <a href="#">get help</a>
          </li>
          <li className="my-1">
            <a href="#">contact us</a>
          </li>
          <li className="my-1">
            <a href="#">FAQs</a>
          </li>
          <li className="my-1">
            <a href="#">self help</a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <h4 className="my-2 text-lg font-bold">newsletter</h4>
        <p className="text-sm font-medium">
          Subscribe to Timbu Cloud Newsletter below
        </p>

        <div className="mx-auto mt-1 flex items-center">
          <input
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            className="w-60 rounded p-1 text-black"
          />
          <div className="ml-0.5 flex h-8 w-8 items-center justify-center rounded bg-white">
            <img src={SendBtn} alt="Send Button" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

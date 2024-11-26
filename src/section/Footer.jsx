import { product, freeResources, bonsai, templates } from "../constants";
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full h-auto mt-20 border-t py-20">
      <div className="max-w-[1000px] w-full mx-auto flex justify-between">
        <div className="flex flex-col text-neutral-500">
          <h4 className="text-xl font-medium uppercase text-grayBon my-12">
            Product
          </h4>
          {product.map((item) => (
            <a
              key={item.label}
              className="text-neutral-500 mb-2 hover:text-greenBon cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="hover:text-greenBon mt-14 my-2">
            Pricing
          </a>
          <a href="#" className="hover:text-greenBon">
            Bonsai Reviews
          </a>
        </div>

        <div className="flex flex-col text-neutral-500">
          <h4 className="text-xl font-medium uppercase text-grayBon my-12">
            Free Resources
          </h4>
          {freeResources.map((item) => (
            <a
              key={item.label}
              className="text-neutral-500 mb-2 hover:text-greenBon cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <h4 className="text-xl font-medium text-grayBon mt-12 mb-6">
            Templates
          </h4>
          {templates.map((item) => (
            <a
              key={item.label}
              className="text-neutral-500 mb-2 hover:text-greenBon cursor-pointer flex items-center"
            >
              {item.label}
              {item.hasDropdown && (
                <RiArrowDropDownLine size={30} opacity={0.6} />
              )}
            </a>
          ))}
        </div>

        <div className="flex flex-col text-neutral-500">
          <h4 className="text-xl font-medium uppercase text-grayBon my-12">
            Bonsai
          </h4>
          {bonsai.map((item) => (
            <a
              key={item.label}
              className="text-neutral-500 mb-2 hover:text-greenBon cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href="#" className="hover:text-greenBon mt-14 my-2">
            Affiliates
          </a>
          <a href="#" className="hover:text-greenBon">
            Write for Us
          </a>
          <a href="#" className="hover:text-greenBon mt-14">
            Comparisons
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

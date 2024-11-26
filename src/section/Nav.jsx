import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { bonsaiLogo } from "../assets";
import { navList } from "../constants";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="absolute z-10 w-full">
      <nav className="flex justify-between items-center mx-4 lg:mx-12 py-4">
        <div className="flex items-center">
          <img src={bonsaiLogo} alt="logo" width="60px" />
          <p className="text-2xl font-bold text-greenBon ml-2">BoundSy</p>
        </div>

        <div className="flex justify-evenly w-1/3 gap-8">
          {navList.map((list) => (
            <div key={list.label} className="relative">
              <a
                href={list.href}
                onClick={() => {
                  if (list.hasDropdown) toggleDropdown(list.label);
                }}
                className="text-md text-grayBon hover:text-coral-red transition-colors hover:text-greenBon text-lg font-normal flex items-center cursor-pointer"
              >
                {list.label}
                {list.hasDropdown && (
                  <RiArrowDropDownLine
                    size={30}
                    opacity={0.6}
                    className="mt-0.5"
                  />
                )}
              </a>

              {list.hasDropdown && activeDropdown === list.label && (
                <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-2 w-48 border-neutral-200 border">
                  {list.option.map((opt, index) => (
                    <li
                      key={index}
                      className="py-0.5 px-2 hover:bg-gray-100 cursor-pointer text-grayBon font-medium border-b border-b-neutral-100 left-0"
                    >
                      {opt.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex font-semibold gap-4">
          <button className="bg-greenBon border border-greenBon rounded-[5px] py-1 px-3 text-white hover:bg-white hover:text-greenBon transition-colors">
            Log in
          </button>
          <button className="bg-greenBon border border-greenBon rounded-[5px] px-7 text-white hover:bg-white hover:text-greenBon transition-colors">
            Try Free
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

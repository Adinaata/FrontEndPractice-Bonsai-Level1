import { useState } from "react";
import { bonsaiLogo } from "..";
import { navList } from "../../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" z-10 w-full">
      <nav className="flex justify-between items-center mx-4 lg:mx-12 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={bonsaiLogo} alt="logo" width="60px" />
          <p className="text-2xl font-bold text-greenBon ml-2">BoundSy</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navList.map((list) => (
            <li key={list.label}>
              <a
                href={list.href}
                className="text-md text-slate-600 hover:text-coral-red transition-colors hover:text-greenBon"
              >
                {list.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex font-semibold gap-4">
          <button className="bg-greenBon border border-greenBon rounded-[5px] py-1 px-3 text-white hover:bg-white hover:text-greenBon transition-colors">
            Log in
          </button>
          <button className="bg-greenBon border border-greenBon rounded-[5px] px-7 text-white hover:bg-white hover:text-greenBon transition-colors">
            Try Free
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white absolute inset-0 z-10 pt-20">
          <ul className="flex flex-col items-center gap-6">
            {navList.map((list) => (
              <li key={list.label}>
                <a
                  href={list.href}
                  className="text-lg text-slate-600 hover:text-coral-red transition-colors"
                  onClick={toggleMenu}
                >
                  {list.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center gap-4 mt-8">
            <button className="bg-greenBon border border-greenBon rounded-[5px] py-2 px-6 text-white hover:bg-white hover:text-greenBon transition-colors">
              Log in
            </button>
            <button className="bg-greenBon border border-greenBon rounded-[5px] py-2 px-6 text-white hover:bg-white hover:text-greenBon transition-colors">
              Try Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;

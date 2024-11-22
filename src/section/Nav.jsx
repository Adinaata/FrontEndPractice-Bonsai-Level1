
import { bonsaiLogo } from '../assets'
import { navList } from "../constants";

const Nav = () => {


  return (
    <header className=" z-10 w-full">
      <nav className="flex justify-between items-center mx-4 lg:mx-12 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={bonsaiLogo} alt="logo" width="60px" />
          <p className="text-2xl font-bold text-greenBon ml-2">BoundSy</p>
        </div>

        {/* Desktop Navigation */}
        <div className="flex justify-evenly w-1/3 gap-8">
          {navList.map((list) => (
              <a
                href={list.href} key={list.label}
                className="text-md text-grayBon hover:text-coral-red transition-colors hover:text-greenBon text-lg font-normal"
              >
                {list.label}
              </a>
          ))}
        </div>

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
    </header>
  );
};

export default Nav;

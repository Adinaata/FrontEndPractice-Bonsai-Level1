import Toggle from "../components/Toggle";
import { plans } from "../constants";
import { FaCheck } from "react-icons/fa";
import { MdFiberNew } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

const Hero = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleIsMonthly = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <section className="w-full pt-20">
      <div className="max-w-[1000px] w-full h-screen items  justify-center mx-auto flex flex-col py-10">
        <p className="flex justify-end mb-4 font-semibold text-sm text-greenBon">
          2 MONTHS FREE!
        </p>
        <div className="flex itemc-center justify-between text-grayBon pb-10">
          <h2 className="text-3xl font-semibold ">Plans & Pricing</h2>
          <div className="flex gap-4 items-center text-neutral-400">
            <p className={clsx("font-medium", isMonthly && "text-grayBon")}>
              MONTHLY
            </p>
            <Toggle onChange={handleIsMonthly}></Toggle>
            <p
              className={clsx("font-medium ", isMonthly ? "" : "text-grayBon")}
            >
              YEARLY
            </p>
          </div>
        </div>

        <div className="flex justify-between px-4 my-6 gap-4">
          {plans.map((item, i) => (
            <div
              key={i}
              className="bg-[#f7fbfd] shadow-xl border border-neutral-200 rounded-sm w-[500px] flex flex-col p-16 hover:scale-105 duration-200 h-auto "
            >
              <h4 className="text-grayBon font-semibold text-2xl">
                {item.name}
              </h4>
              <p className="text-2xl py-4 flex text-grayBon justify-start border-b border-greenBon mb-8 font-semibold ">
                $
                <span className="text-6xl font-bold px-2">
                  {isMonthly ? item.priceMonthly : item.priceYearly}
                </span>
                <span className="flex items-end uppercase">
                  {isMonthly ? "/Month" : `/Year`}
                </span>
                {!isMonthly && (
                  <div className="flex w-full gap-1">
                    <p className="text-greenBon text-base font-bold uppercase line-through">
                      2 Months Free!!
                    </p>
                  </div>
                )}
              </p>
              <div className="flex-grow">
                {item.features.map((inside, i) => (
                  <p key={i} className="mb-5 text-sm text-grayBon font-medium">
                    <div className="flex items-center gap-3 ">
                      <FaCheck color="#00b289" />
                      {inside.label}
                      {inside.hasNew && (
                        <MdFiberNew size={27} color="#f8db62" />
                      )}
                    </div>
                  </p>
                ))}
              </div>

              <button className="bg-greenBon text-white px-20 py-3 text-sm rounded-md uppercase font-medium hover:bg-yellowBon mx-auto flex mt-6">
                Start free
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { RiArrowDropDownLine } from "react-icons/ri";
import { faqList } from "../constants";
import { useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (question) => {
    setActiveQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <section className="w-full h-auto">
      <div className="max-w-[800px] flex flex-col w-full mx-auto">
        <p className="text-4xl text-center text-greenBon mb-8">
          Frequently Asked Questions
        </p>
        {faqList.map((list, i) => (
          <div key={i}>
            <div
              className="border-b flex justify-between rounded-sm items-center cursor-pointer hover:bg-neutral-200 p-1"
              onClick={() => toggleQuestion(list.question)}
            >
              <h2 className="text-xl font-medium text-grayBon">
                {list.question}
              </h2>
              <RiArrowDropDownLine size={40} opacity={0.4} />
            </div>
            {activeQuestion === list.question && (
              <p
                className="w-[90%] text-left mx-auto text-grayBon text-lg
               font-semibold leading-loose my-2"
              >
                {list.answer}
              </p>
            )}
          </div>
        ))}

        {/* <p className="text-4xl text-center text-greenBon mb-8">
          Frequently Asked Questions
        </p>
        <div className="border-b flex justify-between rounded-sm items-center cursor-pointer hover:bg-neutral-200 p-1">
          <p className="text-xl font-medium text-grayBon">
            How does the 14 day free trial work?
          </p>
          <RiArrowDropDownLine size={40} opacity={0.4} />
        </div>
        <div className="border-b flex justify-between rounded-sm items-center cursor-pointer hover:bg-neutral-200 p-1">
          <p className="text-xl font-medium text-grayBon">
            Can I change plans anytime?
          </p>
          <RiArrowDropDownLine size={40} opacity={0.4} />
        </div>
        <div className="border-b flex justify-between rounded-sm items-center cursor-pointer hover:bg-neutral-200 p-1">
          <p className="text-xl font-medium text-grayBon">
            How do I pause my Bonsai subscription?
          </p>
          <RiArrowDropDownLine size={40} opacity={0.4} />
        </div>
        <div className="border-b flex justify-between rounded-sm items-center cursor-pointer hover:bg-neutral-200 p-1">
          <p className="text-xl font-medium text-grayBon">
            What is your refund policy?
          </p>
          <RiArrowDropDownLine size={40} opacity={0.4} />
        </div> */}
      </div>
    </section>
  );
};

export default Faq;

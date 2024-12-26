"use client";
import React, { useState } from "react";

interface Props {
  className?: string;
}

const accordion = [
  {
    title: "Что если не успел на указвнное время?",
    desc: "Это не проблема! Все изучают в своем темпе, у вас всегда будет доступ к материалам, домашкам, и записям стримов, но для максимальной эффективности обучения рекомендуется проходить курс параллельно с другими участниками буткемпа и приходить на стримы. ",
  },
  {
    title: "Что если я столкнулся с трудностями?",
    desc:
      "Что если не успел на указвнное время?\n" +
      "Это не проблема! Все изучают в своем темпе, у вас всегда будет доступ к материалам, домашкам, и записям стримов, но для максимальной эффективности обучения рекомендуется проходить курс параллельно с другими участниками буткемпа и приходить на стримы. ",
  },
  {
    title: "Могу ли я не выполнять домашние задания?",
    desc:
      "Что если не успел на указвнное время?\n" +
      "Это не проблема! Все изучают в своем темпе, у вас всегда будет доступ к материалам, домашкам, и записям стримов, но для максимальной эффективности обучения рекомендуется проходить курс параллельно с другими участниками буткемпа и приходить на стримы. ",
  },
];

const Faq: React.FC<Props> = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div className={""} id={"FAQ"}>
      <section
        className={
          "max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] bg-[#FFFFFF] rounded-[20px] pb-[30px]  lg:pb-[100px]"
        }
      >
        <h1
          className={
            "bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black  py-[30px] lg:py-[80px]  flex justify-center px-[15px] text-center"
          }
        >
          FAQ
        </h1>

        <div id="accordionExample">
          {accordion.map((item, index) => (
            <div
              key={index}
              className="border-t border-neutral-200 dark:border-neutral-600 mt-4"
            >
              <h3 className="mb-0">
                <button
                  className={`${
                    activeElement === `item-${index}`
                      ? "text-primary  dark:bg-neutral-800"
                      : "bg-white dark:bg-neutral-800"
                  } group relative flex w-full items-center rounded-[15px] border-0 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white`}
                  type="button"
                  onClick={() => handleClick(`item-${index}`)}
                  aria-expanded={
                    activeElement === `item-${index}` ? "true" : "false"
                  }
                  aria-controls={`collapse-${index}`}
                >
                  <span className="medium text-[16px] leading-[19px] md:text-[30px] md:leading-[43px]">
                    {item.title}
                  </span>
                  <span
                    className={`${
                      activeElement === `item-${index}`
                        ? "rotate-[-180deg] -mr-1"
                        : "rotate-0"
                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`collapse-${index}`}
                className={`${
                  activeElement === `item-${index}`
                    ? "block px-5 py-4"
                    : "hidden"
                }`}
              >
                <p className="text-[#6A6A6A] text-[14px] leading-[16px] md:text-[23px] md:leading-[32px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;

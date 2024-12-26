"use client";
import React, { useState } from "react";

const accordionData = [
  {
    element: "1",
    module: "Модуль 1",
    title: "Бебра Малого Таза",
    accordionItems: [
      {
        title: "Введение в Solidity 1",
        description: "Описание первого введения в Solidity...",
      },
      {
        title: "Введение в Solidity 2",
        description: "Описание второго введения в Solidity...",
      },
      {
        title: "Введение в Solidity 3",
        description: "Описание третьего введения в Solidity...",
      },
    ],
  },
  {
    element: "2",
    module: "Модуль 2",
    title: "Бебра Малого Таза",
    accordionItems: [
      {
        title: "Введение в Solidity 1",
        description: "Описание первого введения в Solidity...",
      },
      {
        title: "Введение в Solidity 2",
        description: "Описание второго введения в Solidity...",
      },
      {
        title: "Введение в Solidity 3",
        description: "Описание третьего введения в Solidity...",
      },
    ],
  },
];

const Accordion = () => {
  const [activeElements, setActiveElements] = useState<{
    [key: string]: string;
  }>({});

  const handleClick = (moduleIndex: string, value: string) => {
    setActiveElements((prevState) => ({
      ...prevState,
      [moduleIndex]: prevState[moduleIndex] === value ? "" : value,
    }));
  };

  return (
    <section
      className={
        "max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] bg-[#FFFFFF] rounded-[20px] pb-[30px]  lg:pb-[100px]"
      }
    >
      <h1
        className={
          "bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black  py-[30px] lg:py-[80px] flex justify-center px-[15px] text-center"
        }
      >
        Программа Курса
      </h1>

      <div>
        {accordionData.map((module, moduleIndex) => (
          <div key={moduleIndex} className="bg-white">
            <div
              className={
                "bg-[#FAECF2]  rounded-[8px] md:rounded-[20px] flex justify-between mt-[32px] md:mt-[100px]"
              }
            >
              <h2 className="medium text-[24px] leading-[28px] text-[#0E0E0E] md:text-[48px] md:leading-[57px] py-[11.5px] md:py-[24px] pl-[10px] md:pl-[40px]">
                {module.module}
              </h2>
              <h2
                className={
                  "text-[16px] leading-[20px] text-[#0E0E0E] md:text-[48px] md:leading-[57px] py-[11.5px] md:py-[24px] pr-[12px] md:pr-[33px]"
                }
              >
                {module.title}
              </h2>
            </div>

            {module.accordionItems.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="border-t border-neutral-200 dark:border-neutral-600"
              >
                <h3 className="mb-0" id={`heading-${moduleIndex}-${itemIndex}`}>
                  <button
                    className={`${
                      activeElements[moduleIndex] === item.title
                        ? "text-primary"
                        : ""
                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                    type="button"
                    onClick={() =>
                      handleClick(moduleIndex.toString(), item.title)
                    }
                    aria-expanded={
                      activeElements[moduleIndex] === item.title
                        ? "true"
                        : "false"
                    }
                    aria-controls={`collapse-${moduleIndex}-${itemIndex}`}
                  >
                    <span
                      className={
                        "medium text-[16px] leading-[19px] text-[#0E0E0E] md:text-[30px] md:leading-[43px]"
                      }
                    >
                      {item.title}
                    </span>
                    <span
                      className={`${
                        activeElements[moduleIndex] === item.title
                          ? "rotate-[-180deg] -mr-1"
                          : "rotate-0"
                      } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out`}
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
                  className={`${
                    activeElements[moduleIndex] === item.title
                      ? "block px-5 py-4"
                      : "hidden"
                  }`}
                >
                  <p
                    className={
                      "text-[#6A6A6A] text-[14px] leading-[16px] md:text-[23px] md:leading-[32px]"
                    }
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;

"use client";
import React from "react";
import Image from "next/image";

import icon1 from "../public/assets/university/1.svg";
import icon2 from "../public/assets/university/2.svg";
import icon3 from "../public/assets/university/3.svg";
import icon4 from "../public/assets/university/4.svg";
import icon5 from "../public/assets/university/5.svg";
import icon6 from "../public/assets/university/6.svg";
import useEqualHeight from "@/shared/hooks/useEqualHeight";

interface Props {
  className?: string;
}

const solidity = [
  {
    title: "Топовые преподаватели",
    desc: "Лекторы Solidity University - действующие эксперты в сфере IT и Web3 разработки\n",
    img: icon1,
    alt: "IT и Web3",
  },
  {
    title: "Актуальные технологии",
    desc: "Используем исключительно актуальные технологии и версии языка Solidity\n",
    img: icon2,
    alt: "версии языка Solidity",
  },
  {
    title: "Доступная подача",
    desc: "Понятный материал. На курсе предусмотрена индивидуальная поддержка\n",
    img: icon3,
    alt: "блокчейн",
  },
  {
    title: "В ногу с AI",
    desc: "Упор на AI технологии и применении их в блокчейн разработке",
    img: icon4,
    alt: "AI",
  },
  {
    title: "Помощь в трудоустройстве",
    desc: "Модуль, обучающий поиску работы, подготовке LinkedIn, CV, пет-проектов\n",
    img: icon5,
    alt: "поиску работы",
  },
  {
    title: "NFT Диплом",
    desc: "Диплом о прохождении в виде NFT, отметка в LinkedIn, которую нельзя подделать\n",
    img: icon6,
    alt: "NFT",
  },
];

const SolidityUniversity: React.FC<Props> = () => {
  const gridRef = useEqualHeight(solidity);

  return (
    <div className={"px-[22px] md:px-[22px] "} id={"О Нас"}>
      <section
        className={
          "max-w-[1360px] mx-auto bg-[#F9EBF1] border rounded-[30px]   py-[30px] lg:py-[80px] "
        }
      >
        <h1
          className={
            "bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black  mb-[30px] lg:mb-[80px] flex justify-center px-[15px] text-center"
          }
        >
          Почему Solidity University?
        </h1>

        <div
          className={
            "flex justify-center items-center  px-[28.5px] lg:px-[65px]  "
          }
        >
          <div
            ref={gridRef}
            className={
              "grid gap-[30px] lg:gap-[40px] grid-cols-1 xxl:grid-cols-3 md:grid-cols-2 "
            }
          >
            {solidity.map((item, i) => (
              <div
                key={i}
                className={
                  "shadow-[10px_10px_40px_0px_#80133E2E]   overflow-hidden rounded-[20px] w-full  bg-[#FFFFFF] flex flex-col    px-[30px] lg:px-[30px] pb-[40px]" +
                  " xxl:h-full h-full overflow-hidden hover:bg-[#fefafc] transition duration-500 ease-in-out"
                }
              >
                <div
                  className={
                    "mt-[30px] lg:mt-[40px] mb-[19px]  flex items-center gap-[16px] "
                  }
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    className={"w-[35px] h-[35px] lg:w-[50px] lg:h-[50px]"}
                  />
                  <p
                    className={
                      "medium text-[20px] leading-[28px] text-[#202020] md:text-[28px] md:leading-[32px]"
                    }
                  >
                    {item.title}
                  </p>
                </div>

                <p
                  className={
                    " overflow-hidden text-[16] leading-[18px] text-[#383838] flex md:text-[22px] md:leading-[26px]"
                  }
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolidityUniversity;

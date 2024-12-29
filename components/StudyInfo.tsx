"use client";
import React from "react";
import useEqualHeight from "@/shared/hooks/useEqualHeight";

interface Props {
  className?: string;
}

const study = [
  {
    no: "1.",
    title: "Разборы & Лайв кодинг",
    desc:
      "Каждые выходные мы делаем трансляцию с разбором сложностей, общаемся, \n" +
      "отвечаем на вопросы, подводим итоги модуля",
  },
  {
    no: "2.",
    title: "Домашние задания",
    desc: "После каждого урока открывается доступ к домашнему заданию, чтобы закрепить пройденный материал модуля",
  },
  {
    no: "3.",
    title: "Пет-проекты",
    desc: "По окончанию каждого модуля, используя полученные знания, мы построим полноценный проект, который станет частью вашего портфолио",
  },
  {
    no: "4.",
    title: "Сбалансированная программа",
    desc: "Прохождение материала в комфортном темпе. ВТ, ЧТ открывается доступ к новым урокам, разбитых на логичные для восприятия темы",
  },
];
const StudyInfo: React.FC<Props> = () => {
  const gridRef = useEqualHeight(study);

  return (
    <section
      id={"Программа"}
      className={
        "max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] "
      }
    >
      <h1
        className={
          "bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black  mb-[30px] lg:mb-[80px] flex justify-center px-[15px] text-center"
        }
      >
        Как проходит обучение
      </h1>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[52px] flex"
      >
        {study.map((item, i) => (
          <div
            key={i}
            className={
              "group flex flex-col   pt-[30px] pb-[40px] px-[30px] md:pt-[60px] md:pb-[120px] md:px-[60px] border-0 border-[#e5e7eb] rounded-[30px] bg-[#333333] hover:bg-[#F9EBF1] transition-colors" +
              " duration-500" +
              " ease-in-out h-full overflow-hidden"
            }
          >
            <span
              className={
                "bold-f text-[#FF3985] text-[44px] leading-[52px] lg:text-[96px] lg:leading-[115px]"
              }
            >
              {item.no}
            </span>
            <p
              className={
                "medium text-[#FFFFFF] text-[22px] leading-[36px] lg:text-[48px] lg:leading-[58px] mt-[5px] mb-[14px] lg:mt-[10px] lg:mb-[32px] group-hover:text-[#000000]"
              }
            >
              {item.title}
            </p>
            <p
              className={
                "light text-[#FFFFFF] text-[16px] leading-[19px] lg:text-[32px] lg:leading-[38px] group-hover:text-[#000000]"
              }
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudyInfo;

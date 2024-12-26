"use client";
import React from "react";
import { useModal } from "@/shared/hooks/ModalContext ";

interface Props {
  className?: string;
}
const link = ["О Нас", "Программа", "Лекторы", "FAQ"];

const Footer: React.FC<Props> = () => {
  const { openCourseSignIn } = useModal();

  const sectionScrollHandler = (sectionId: any) => {
    // console.log("sectionId", sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={
        "bg-[#000000] rounded-t-[15px] md:rounded-t-[30px] mt-[60px] md:mt-[160px]"
      }
    >
      <section className={"max-w-[1280px] mx-auto "}>
        <div
          className={
            "flex justify-evenly md:justify-between  gap-[15px] lg:gap-[30px] pt-[40px] pb-[40px] md:pt-[80px] md:pb-[90px] px-[20px] lg:px-[80px] "
          }
        >
          <div>
            <span className="bold-f text-[36px] xs:text-[60px] md:text-[100px] lg:text-[140px] leading-none text-white block ">
              SOLIDITY
            </span>

            <div className={"flex "}>
              <div className="bold-f text-[16px] xs:text-[30px] md:text-[46px]  lg:text-[64px] leading-tight text-[#8463CE] ">
                BOOTCAMP
              </div>
              <div
                className={
                  "text-[13px] sm:text-[20px] md:text-[25px] lg:text-[40px]  leading-[15px]  lg:leading-[49px] text-[#F7A0CA]  ml-auto"
                }
              >
                {`{2025}`}
              </div>
            </div>
          </div>

          <div className={"mt-[10px] md:mt-[30px]"}>
            <button
              onClick={openCourseSignIn}
              className={
                "pink-btn text-[#FFFFFF] font-bold text-[16px]  leading-[20px] md:text-[32px] md:leading-[39px]  " +
                "px-[15px] py-[10px] sm:py-[28px] md:px-[55px] md:py-[20px]" +
                " rounded-[8px] md:rounded-[15px]"
              }
            >
              Записаться
            </button>
          </div>
        </div>

        <nav className={"pb-[20px] lg:pb-[80px]"}>
          <ul
            className={
              "flex flex-wrap justify-center md:justify-end gap-[15px] lg:gap-[44px] pr-[10px] lg:pr-[20px]"
            }
          >
            {link.map((item, i) => (
              <li
                onClick={() => sectionScrollHandler(item)}
                key={i}
                className={
                  "medium text-[#FFFFFF] text-[14px] xs:text-[18px] leading-[20px] xs:leading-[21px] lg:text-[30px] lg:leading-[36px] cursor-pointer"
                }
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;

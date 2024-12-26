"use client";
import React from "react";
import eth from "../public/assets/eth.png";
import Image from "next/image";
import { useModal } from "@/shared/hooks/ModalContext ";
interface Props {
  className?: string;
}

const SectionHero: React.FC<Props> = () => {
  const { openCourseSignIn } = useModal();
  return (
    <section
      className={
        " mx-[20px] xs:mx-[20px] md:mx-[56px] relative text-white pb-[60px]  md:pb-[121px]"
      }
    >
      <Image
        src={eth}
        alt="ethereum"
        className={
          " mx-auto absolute top-[140px] xs:top-[80px] md:top-0 left-0 right-0 inset-0 object-contain -z-0  w-[150px] xs:w-[200px] sm:w-[250px]  md:w-[322px] lg:w-[422px] "
        }
      />

      <div
        className={
          "relative  flex justify-between mx-[0px] xs:mx-[20px] sm:mx-[40px]  z-10   "
        }
      >
        <div className={""}>
          <div className={"mb-[72px]"}>
            <span className="bold-f text-[48px]  sm:text-[70px] md:text-[80px] lg:text-[100px] xxl:text-[140px] leading-none text-white block ">
              SOLIDITY
            </span>
            <span className="bold-f text-[24px] sm:text-[34px] md:text-[40px] lg:text-[64px] leading-tight text-[#8463CE] block ">
              BOOTCAMP
            </span>
          </div>

          <div
            className={
              "light  text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[13px] sm:leading-[20px] md:leading-[27px] lg:leading-[32px] w-full sm:w-[264px] h-[96px] "
            }
          >
            {/*w-[264px] h-[96px]*/}
            {/* Мобильная версия */}
            <span className="block md:hidden w-[133px] ">
              Трех месячная программа по изучению Solidity
            </span>
            {/* Десктопная версия */}
            <span className="hidden md:block">
              3х-месячная программа по изучению Solidity
            </span>
          </div>

          {/*Mobile version block*/}
          <div
            className={
              "flex  md:block md:hidden light text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[13px] sm:leading-[20px] md:leading-[27px] lg:leading-[32px] " +
              "  mt-[150px] xs:mt-[195px] text-left     w-[179px] sm:w-[250px] lg:w-[360px] "
            }
          >
            Вы освоите язык, сделаете шесть пэт-проектов и подготовитесь к
            трудоустйству
          </div>

          {/* Десктопная версия */}
          <div className={"hidden md:block  mt-[160px] mb-[80px] "}>
            <span
              className={
                " text-[14px] sm:text-[20px] md:text-[27px]  lg:text-[32px]  medium block "
              }
            >
              Старт
            </span>
            <span
              className={
                " text-[15px] sm:text-[20px] md:text-[27px]  lg:text-[32px] mt-[3px] block"
              }
            >
              22 Февраля
            </span>
          </div>

          <button
            onClick={openCourseSignIn}
            className={
              "hidden md:block pink-btn py-[9.3px]  lg:py-[20px]  px-[38px] lg:px-[45px] font-bold  leading-[39px]  text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px]"
            }
          >
            Записаться
          </button>
        </div>

        <div className={"flex flex-col items-end"}>
          {/*desktop verstion*/}
          <div
            className={
              "hidden md:block light text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px] leading-[13px] sm:leading-[20px] md:leading-[27px] lg:leading-[32px] " +
              "  mb-[125px] mt-[28px]  text-right w-[250px] lg:w-[360px] "
            }
          >
            Вы освоите язык, сделаете 6 пэт-проектов и подготовитесь к
            трудоустройству
          </div>

          <div
            className={
              " mt-[40px] xs:mt-[80px]  text-[20px] md:text-[30px] lg:text-[40px] leading-[49px] text-[#F7A0CA]  mb-[60px] md:mb-[159px]   mr-[10px] xxl:mr-[200px] "
            }
          >
            {`{2025}`}
          </div>

          {/*Mobile Version*/}
          <div className={" md:hidden md:block   "}>
            <span
              className={
                " text-[14px] sm:text-[20px] md:text-[27px]  lg:text-[32px]  medium block text-right"
              }
            >
              Старт
            </span>
            <span
              className={
                " text-[15px] sm:text-[20px] md:text-[27px]  lg:text-[32px] mt-[3px] block text-right"
              }
            >
              22 Февраля
            </span>
          </div>

          <div className={"text-right"}>
            <div className={"mt-[130px] md:mt-[0px] mb-[20px] sm:mb-[62px]"}>
              <span
                className={
                  "medium   text-[18px] sm:text-[23px] md:text-[27px]  lg:text-[48px]  leading-[18px]  lg:leading-[32px]"
                }
              >
                66%
              </span>
              <br />
              <span
                className={
                  "text-[14px] sm:text-[20px] md:text-[27px]  lg:text-[32px] light leading-[13px]  lg:leading-[32px]"
                }
              >
                Скидка
              </span>
            </div>

            <div>
              <span
                className={
                  "medium  text-[18px] sm:text-[23px] md:text-[27px]  lg:text-[48px]  leading-[18px]  lg:leading-[32px]"
                }
              >
                $200
              </span>
              <br />
              <span
                className={
                  " text-[14px] sm:text-[20px] md:text-[27px]  lg:text-[32px] light leading-[13px]  lg:leading-[32px] "
                }
              >
                Стоимость
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*mobile version*/}

      <button
        onClick={openCourseSignIn}
        className={
          "flex mx-auto md:block md:hidden   mt-[57px] pink-btn py-[9.3px]  lg:py-[20px]  px-[38px] lg:px-[45px] font-bold  leading-[39px]  text-[14px] sm:text-[20px] md:text-[26px]" +
          " lg:text-[32px]"
        }
      >
        Записаться
      </button>
    </section>
  );
};

export default SectionHero;

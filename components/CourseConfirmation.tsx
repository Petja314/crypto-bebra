"use client";
import React from "react";
import { useModal } from "@/shared/hooks/ModalContext ";
import Image from "next/image";
import Close from "@/public/assets/icons/Close.svg";
import Tether from "@/public/assets/icons/Tether.svg";

interface Props {
  className?: string;
}

const paymentOptions = [
  "Оплата другими крипто-активами",
  "Visa/Mastercard в UAH/RUB/BYN",
  "Оплата в рассрочку",
  "PayPal",
];
const CourseConfirmation: React.FC<Props> = () => {
  const { isCourseConfirmationVisible, closeCourseConfirmation } = useModal();

  if (!isCourseConfirmationVisible) return null;

  return (
    <>
      {isCourseConfirmationVisible && (
        <div
          className="fixed inset-0 bg-[#000000E5] bg-opacity-90 flex justify-center items-center z-50 px-[5px]  md:px-[138px] md:py-[340px] "
          onClick={closeCourseConfirmation} // Закрыть при клике на фон
        >
          <div className={"max-w-[1280px] mx-auto"}>
            <div
              className="relative flex flex-col  px-[41px] py-[24px] md:px-[50px]  lg:px-[170px] md:py-[60px] bg-[#F4F3F3] border rounded-[10px] md:rounded-[30px] "
              onClick={(e) => e.stopPropagation()} // Остановить всплытие клика
            >
              {/* Кнопка закрытия */}
              <button
                className="absolute top-[10px] right-[10px] md:top-[30px] md:right-[30px] z-10"
                onClick={closeCourseConfirmation}
              >
                <Image
                  src={Close}
                  alt={"close-icon"}
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                />
              </button>

              {/* Заголовок */}
              <div className={"relative"}>
                <h1
                  className={
                    "medium text-[#000000] text-[20px] leading-[14px] md:text-[64px] md:leading-[60px] lg:leading-[45px] text-center"
                  }
                >
                  Вы успешно записаны!
                </h1>
              </div>

              {/* Текст */}
              <p
                className={
                  "text-[#000000] text-[13px] leading-[15px] md:text-[36px] md:leading-[42px] mt-[45px] mb-[41px] md:mt-[70px] md:mb-[54px] text-center"
                }
              >
                В скором времени с вами свяжется наш менеджер. Для обучения по
                текущей цене необходимо внести полную оплату до окончания
                периода скидки
              </p>

              <button
                className="
    mx-auto bold-f text-white pink-btn py-[15px] px-[10px]
    md:py-[20px] md:px-[33px] text-[15px] leading-[18px]
    md:text-[32px] md:leading-[39px] border rounded-[15px]
    flex items-center justify-center gap-[15px] md:gap-[30px]
    w-full max-w-[255px]
  "
              >
                Оплата
                <Image
                  src={Tether}
                  alt={"usdt"}
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                />
              </button>

              <div className="mt-[16px] md:mt-[60px]">
                <h2 className="relative medium text-[#000000] text-[15px] leading-[18px] md:text-[40px] md:leading-[48px] ">
                  Альтернативные способы оплаты:
                </h2>
                <ul className="list-disc mt-[9px] md:mt-[34px] pl-[1.5rem]">
                  {paymentOptions.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#000000] text-[14px] leading-[20px] md:text-[36px] md:leading-[50px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseConfirmation;

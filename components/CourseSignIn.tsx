"use client";
import React, { useState } from "react";
import Image from "next/image";
import Arrow from "@/public/assets/icons/Arrow.svg";
import Close from "@/public/assets/icons/Close.svg";
import { useModal } from "@/shared/hooks/ModalContext ";
import { handleSubmit } from "@/shared/api/telegramApiCall";
import toast from "react-hot-toast";

interface Props {
  className?: string;
}

const CourseSignIn: React.FC<Props> = () => {
  const { isCourseSignInVisible, closeCourseSignIn, openCourseConfirmation } =
    useModal();

  const [telegramNick, setTelegramNick] = useState("");

  if (!isCourseSignInVisible) return null;
  const courseHandler = (value: any) => {
    setTelegramNick(value);
  };
  // const sendPaymentRequest = () => {
  //   closeCourseSignIn();
  //   openCourseConfirmation();
  // };

  const sendMessage = async () => {
    if (telegramNick.length > 0) {
      const result = await handleSubmit(telegramNick);
      if (result.success) {
        toast("✅ Наш менеджер свяжется с вами в скором времени!");
        setTelegramNick(""); // Очищаем поле только при успешной отправке
        closeCourseSignIn();
        openCourseConfirmation();
      } else {
        toast.error(`❌ Ошибка: ${result.error}`); // Отображаем сообщение об ошибке
      }
    }
  };

  return (
    <>
      {isCourseSignInVisible && (
        <div
          className="fixed inset-0 bg-[#000000E5] bg-opacity-90 flex justify-center items-center z-50 px-[5px] pt-[0px] md:pt-[160px] md:px-[138px] md:py-[340px]"
          onClick={closeCourseSignIn} // Закрыть при клике на фон
        >
          <div className={"max-w-[1280px] mx-auto"}>
            <div
              className="relative flex flex-col  px-[41px] py-[24px] md:px-[170px] md:py-[60px] bg-[#F4F3F3] border rounded-[10px] md:rounded-[30px] "
              onClick={(e) => e.stopPropagation()} // Остановить всплытие клика
            >
              {/* Заголовок */}
              <button
                className="absolute top-[10px] right-[10px] md:top-[30px] md:right-[30px] z-10"
                onClick={closeCourseSignIn}
              >
                <Image
                  src={Close}
                  alt={"close-icon"}
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                />
              </button>
              <div className={"relative"}>
                <h1
                  className={
                    "medium text-[#000000] text-[20px] leading-[14px] md:text-[64px] md:leading-[45px] text-center  pt-[30px]"
                  }
                >
                  Записаться на курс
                </h1>
                {/* Кнопка закрытия */}
              </div>

              {/* Текст */}
              <p
                className={
                  "text-[#000000] text-[13px] leading-[15px] md:text-[36px] md:leading-[42px] mt-[45px] mb-[41px] md:mt-[70px] md:mb-[54px] text-center"
                }
              >
                Для записи на Solidity Bootcamp 2025 оставьте свой telegram и
                наш менеджер свяжется с вами для уточнения всех деталей
              </p>

              {/* Поле ввода и кнопка */}
              <div className="mt-[30px] md:mt-[60px] lg:mt-0 flex items-center bg-[#F4F4F4] rounded-[20px] shadow-md mx-auto ">
                <input
                  onChange={(e: any) => courseHandler(e.currentTarget.value)}
                  type="text"
                  placeholder="@telegram"
                  className="text-black flex-1 bg-transparent focus:outline-none rounded-[10px] md:rounded-[20px] lg:rounded-[20px]
                  text-[#18181847] text-[17px] sm:text-[22px] md:text-[32px] leading-[21px] sm:leading-[28px] md:leading-[38px]
                  h-[50px] sm:h-[60px] lg:h-[90px] pl-[15px] lg:pl-[52px]"
                />
                <button
                  onClick={sendMessage}
                  disabled={!telegramNick}
                  className={`flex items-center justify-center 
    transition duration-300 shadow-md
    rounded-[10px] md:rounded-[20px] lg:rounded-[20px]
    h-[50px] sm:h-[60px] lg:h-[90px] w-[50px] sm:w-[60px] lg:w-[90px]
    ${
      !telegramNick
        ? "bg-[#FFC7DF] cursor-not-allowed" // Disabled state styles
        : "bg-[#FC3193]" // Enabled state styles
    }`}
                >
                  <Image
                    src={Arrow}
                    alt={"arrow-icon"}
                    className={"w-[17px] h-[17px] md:w-[35px] md:h-[30px]"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSignIn;

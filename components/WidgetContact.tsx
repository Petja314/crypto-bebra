"use client";
import React, { useState } from "react";
import Arrow from "../public/assets/icons/Arrow.svg";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { handleSubmit } from "@/shared/api/telegramApiCall";

interface Props {
  className?: string;
}

const WidgetContact: React.FC<Props> = () => {
  const [telegramNick, setTelegramNick] = useState("");
  const courseHandler = (value: any) => {
    setTelegramNick(value);
  };

  const sendMessage = async () => {
    if (telegramNick.length > 0) {
      const result = await handleSubmit(telegramNick);
      if (result.success) {
        toast("✅ Наш менеджер свяжется с вами в скором времени!");
        setTelegramNick(""); // Очищаем поле только при успешной отправке
      } else {
        toast.error(`❌ Ошибка: ${result.error}`); // Отображаем сообщение об ошибке
      }
    }
  };

  return (
    <div className="px-[26px] md:px-[22px]">
      <Toaster />
      <section
        className={
          "max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] bg-[#EAE6E8] rounded-[15px] lg:rounded-[30px] "
        }
      >
        {/* Контейнер для центрирования */}
        <div
          className={
            "flex flex-col lg:flex-row items-center justify-between py-[40px] md:py-[80px] gap-[30px]  "
          }
        >
          {/* Текст */}
          <p
            className={
              "medium text-[20px] leading-[22px] sm:text-[28px] md:text-[40px] md:leading-[45px] sm:pb-[20px] md:pb-[32px] text-center lg:text-left "
            }
          >
            С радостью ответим на любые вопросы 💻
          </p>

          {/* Виджет */}
          <div className="mt-[20px] lg:mt-0 flex items-center bg-[#F4F4F4] rounded-[20px] shadow-md">
            {/* Поле ввода */}
            <input
              value={telegramNick}
              onChange={(e: any) => courseHandler(e.currentTarget.value)}
              type="text"
              placeholder="@telegram"
              className="flex-1 bg-transparent focus:outline-none rounded-[10px] md:rounded-[20px] lg:rounded-[20px]
              text-[#18181847] text-[17px] sm:text-[22px] md:text-[32px] leading-[21px] sm:leading-[28px] md:leading-[38px]
              h-[50px] sm:h-[60px] lg:h-[90px] pl-[15px] lg:pl-[52px] text-black"
            />
            {/* Кнопка */}
            <button
              onClick={sendMessage}
              className={`flex items-center justify-center bg-[#F9BFD4]  shadow-md
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
      </section>
    </div>
  );
};

export default WidgetContact;

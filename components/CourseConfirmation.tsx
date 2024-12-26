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
  const { isVisible, closeModal } = useModal();

  if (!isVisible) return null;

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 bg-[#000000E5] bg-opacity-90 flex justify-center items-center z-50 px-[5px] pt-[0px] md:pt-[160px] md:px-[138px] md:py-[340px]"
          onClick={closeModal} // Закрыть при клике на фон
        >
          <div className={"max-w-[1280px] mx-auto"}>
            <div
              className="relative flex flex-col  px-[41px] py-[24px] md:px-[170px] md:py-[60px] bg-[#F4F3F3] border rounded-[10px] md:rounded-[30px] "
              onClick={(e) => e.stopPropagation()} // Остановить всплытие клика
            >
              {/* Заголовок */}
              <div className={"relative"}>
                <h1
                  className={
                    "medium text-[#000000] text-[20px] leading-[14px] md:text-[64px] md:leading-[45px] text-center"
                  }
                >
                  Вы успешно записаны!
                </h1>
                {/* Кнопка закрытия */}
                <button
                  className="absolute top-[10px] right-[10px] z-10"
                  onClick={closeModal}
                >
                  <Image
                    src={Close}
                    alt={"close-icon"}
                    className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                  />
                </button>
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
                className={
                  "bold-f pink-btn py-[15px] px-[10px] md:py-[20px] md:px-[33px] text-[15px]\n" +
                  "leading-[18px]  md:text-[32px] md:leading-[39px] border rounded-[15px] flex align-center"
                }
              >
                Оплата
                <Image src={Tether} alt={"usdt"} />
              </button>

              <h2
                className={
                  "medium text-[#000000] text-[15px] leading-[18px] md:text-[40px] md:leading-[48px] "
                }
              >
                Альтернативные способы оплаты:
              </h2>

              <ul>
                {paymentOptions.map((item, i) => (
                  <li
                    key={i}
                    className={
                      "text-[#000000] text-[14px] leading-[20px] md:text-[36px] md:leading-[50px]"
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseConfirmation;

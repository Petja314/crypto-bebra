"use client";
import React, { useRef, useState } from "react";

interface Props {
  className?: string;
}

const accordion = [
  {
    title: "Где проходит обучение?",
    desc:
      "Новые уроки, домашние задания и все необходимые материалы будут доступны в вашем личном кабинете на обучающей платформе Solidity University.\n" +
      "Субботние стримы будут проходить в Telegram или Discord по согласованию с группой.",
  },
  {
    title: "Сколько времени занимает обучение?",
    desc:
      "Основная часть обучения, отведенная на получение hard skills, длится 3 месяца и включает в себя 6 модулей.\n" +
      "Дополнительно мы выделяем модуль на знакомство с полезными фреймворками и AI инструментам, а так же полноценный модуль посвященный подготовке к поиску работы.",
  },
  {
    title: "Что если я не успеваю проходить материал?",
    desc: "Группа проходит материал параллельно, чтобы лекторы могли давать максимум пользы на субботних стримах и отвечать на актуальные вопросы . Если вы не успели пройти уроки к субботнему стриму или вовсе выпали с обучения - все уроки, домашние задания, записи стримов остаются в вашем личном кабинете и никуда не пропадают.",
  },
  {
    title: "Что если я не могу выполнить домашнее задание?",
    desc: "Это нормально если вы столкнулись с трудностями в процессе обучения. У вас будет куратор, к которому вы сможете обратиться за помощью. Так же студенты могут общаться между собой в чате и обмениваться опытом друг с другом.",
  },
  {
    title: "Можно не выполнять домашние задания?",
    desc: "Основная задача домашних заданий - закрепить усвоенный материал. Если вы считаете, что вам это не нужно - мы не в праве заставлять вас.",
  },
  {
    title: "Вы помогаете с трудоустройством?",
    desc: "Мы обучаем всем необходимым навыкам, включая разбор вопрос на собеседованиях, чтобы поиск работы стал проще. По итогу прохождения курса у вас будет заполненный LinkedIn, Github, готовые pet-проекты, качественное CV и знания, которые помогут",
  },
  {
    title: "Какие способы оплаты?",
    desc: (
      <div>
        <p className={""}>
          После записи на курс вам будет предложено совершить оплату в
          криптовалюте с помощью встроенного функционала сайта.
        </p>
        <p className={"py-[3px]"}>Альтернативные способы оплаты:</p>
        <ul>
          <li className={"pb-[3px]"}>- Оплата другими крипто-активами</li>
          <li className={"pb-[3px]"}>- Visa/Mastercard в UAH/RUB/BYN</li>
          <li>- Оплата в рассрочку - PayPal</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Возможен ли возврат средств?",
    desc: "Возврат средств возможен в первые 14 дней solidity bootcamp, то есть до окончания первого модуля. ",
  },
  {
    title: "Как работает оплата в рассрочку?",
    desc: "В web3 нет возможности давать стандартную рассрочку, с гарантией оплаты, поэтому мы можем предложить - разбивать вашу оплату на этапы.",
  },
];

const Faq: React.FC<Props> = () => {
  const [activeElement, setActiveElement] = useState("");
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <div id="FAQ">
      <section className="max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] bg-[#FFFFFF] rounded-[20px] pb-[30px] lg:pb-[100px]">
        <h1 className="bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black py-[30px] lg:py-[80px] flex justify-center px-[15px] text-center">
          FAQ
        </h1>

        <div id="accordionExample">
          {accordion.map((item, index) => (
            <div
              key={index}
              className="border-b border-neutral-200 dark:border-neutral-600 mt-4"
            >
              <h3 className="mb-0">
                <button
                  className={`${
                    activeElement === `item-${index}`
                      ? "text-primary dark:bg-neutral-800"
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
                ref={(el: any) => (contentRefs.current[`item-${index}`] = el)}
                className="overflow-hidden transition-all duration-300 ease-in-out mb-[15px]"
                style={{
                  maxHeight:
                    activeElement === `item-${index}`
                      ? `${contentRefs.current[`item-${index}`]?.scrollHeight}px`
                      : "0",
                }}
              >
                <p className="text-[#6A6A6A] text-[14px] leading-[16px] md:text-[23px] md:leading-[32px] px-5 py-2">
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

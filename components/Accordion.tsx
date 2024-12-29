"use client";
import React, { useRef, useState } from "react";

{
  /*const accordionData = [*/
}
{
  /*  {*/
}
{
  /*    element: "1",*/
}
{
  /*    module: "Модуль 1",*/
}
//     title: "Модуль 1: Введение в Solidity",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
{
  /*        description: "Описание первого введения в Solidity...",*/
}
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "2",
//     module: "Модуль 2",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "3",
//     module: "Модуль 3",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "4",
//     module: "Модуль 4",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "5",
//     module: "Модуль 5",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "6",
//     module: "Модуль 6",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "7",
//     module: "Модуль 7",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
//   {
//     element: "8",
//     module: "Модуль 8",
//     title: "Бебра Малого Таза",
//     accordionItems: [
//       {
//         title: "Введение в Solidity 1",
//         description: "Описание первого введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 2",
//         description: "Описание второго введения в Solidity...",
//       },
//       {
//         title: "Введение в Solidity 3",
//         description: "Описание третьего введения в Solidity...",
//       },
//     ],
//   },
// ];

const accordionData = [
  {
    element: "1",
    module: "Модуль 1",
    title: "Введение в Solidity",
    accordionItems: [
      {
        title: "Введение в разработку смарт-контрактов",
        description:
          "Основные принципы работы блокчейна и смарт-контрактов. Краткий обзор экосистемы Ethereum и её возможностей для разработчиков.",
      },
      {
        title: "Знакомство с Remix",
        description:
          "Работа в онлайн-IDE Remix: создание, тестирование и деплой смарт-контрактов. Настройка окружения и изучение базовых инструментов.",
      },
      {
        title: "Ваш первый смарт-контракт",
        description:
          "Создадим ваш первый смарт-контракт, задеплоим и протестируем его в Remix.",
      },
      {
        title: "Основы Solidity",
        description:
          "Изучение базы языка: переменные (state и local), типы данных (bool, uint, string и др.), массивы и mapping. Понимание их применения.",
      },
      {
        title: "Контроль логики",
        description:
          "Использование конструкций require, модификаторов и событий для контроля выполнения функций и записи данных в блокчейн.",
      },
      {
        title: "Типы данных в Solidity",
        description: "Создание и управление массивами, использование mapping.",
      },
      {
        title: "Разработка функциональных смарт-контрактов",
        description:
          "Создание контрактов для сбора средств, аирдропа, лидерборда с использованием изученных техник.",
      },
    ],
  },
  {
    element: "2",
    module: "Модуль 2",
    title: "Углубляемся в Solidity",
    accordionItems: [
      {
        title: "Best Practices в Solidity",
        description:
          "Лучшие практики разработки: как писать безопасный, читаемый и оптимизированный код, избегая ошибок.",
      },
      {
        title: "Продвинутая работа с данными и логикой",
        description:
          "Изучение циклов (for, while), логических операторов, работы со сложными данными, включая структуры и вложенные массивы.",
      },
      {
        title: "Взаимодействие с внешними контрактами",
        description:
          "Работа с интерфейсами, external-функциями, библиотеками. Безопасные подходы к межконтрактным транзакциям.",
      },
      {
        title: "Деплой и верификация в testnet",
        description:
          "Добавление кастомных сетей, использование faucet, деплой и верификация контракта в тестовой сети с помощью etherscan.",
      },
      {
        title: "Осваиваем Git и GitHub",
        description:
          "Основы работы с GitHub: настройка репозитория, коммиты, pull requests и другие базовые навыки.",
      },
    ],
  },
  {
    element: "3",
    module: "Модуль 3",
    title: "ERC стандарты и OpenZeppelin",
    accordionItems: [
      {
        title: "Разбираемся с ERC и EIP",
        description:
          "Исследуем стандарты Ethereum: зачем они нужны, как создаются и становятся общепринятыми.",
      },
      {
        title: "Знакомство с OpenZeppelin",
        description:
          "Популярные контракты (Ownable, Pausable), их важность для безопасности и оптимизации. Работа с OpenZeppelin Wizard.",
      },
      {
        title: "Изучаем ERC20 (Токены)",
        description:
          "Разработка собственных токенов с кастомным функционалом, работа методов ERC20.",
      },
      {
        title: "Claim, Airdrop контракты, Merkle Tree",
        description:
          "Проектирование решений для раздачи токенов, работа с access control и обработка большого числа пользователей.",
      },
      {
        title: "Изучаем ERC721 (NFT)",
        description:
          "Создание NFT коллекции. Работа с функциями стандарта ERC721 и хранением данных.",
      },
      {
        title: "Углубляемся в NFT",
        description:
          "Разработка minter смарт-контракта, изучение работы NFT маркетплейсов и сейлов.",
      },
      {
        title: "Знакомимся с ERC1155",
        description:
          "Особенности semi-fungible токенов, создание контрактов на основе ERC1155.",
      },
    ],
  },
  {
    element: "4",
    module: "Модуль 4",
    title: "Тестирование и оптимизация смарт-контрактов",
    accordionItems: [
      {
        title: "Оптимизация газа",
        description:
          "Изучение методов оптимизации газа: минимизация операций с storage, использование inline-вычислений.",
      },
      {
        title: "Безопасность в смарт-контрактах",
        description:
          "Контроль выполнения с require и assert, использование immutability и constants для безопасности.",
      },
      {
        title: "Immutable и Constant",
        description:
          "Глубокое понимание их работы и влияние на эффективность и безопасность контрактов.",
      },
      {
        title: "Тестирование контрактов",
        description:
          "Настройка среды (Hardhat/Foundry), написание unit-тестов, симуляция взаимодействия контрактов.",
      },
      {
        title: "Анализ и улучшение кода",
        description:
          "Работа с инструментами анализа кода, рефакторинг для повышения читаемости и надёжности.",
      },
    ],
  },
  {
    element: "5",
    module: "Модуль 5",
    title: "Продвинутые возможности Solidity",
    accordionItems: [
      {
        title: "Multisig контракты",
        description:
          "Разработка контрактов с мультиподписью для управления активами.",
      },
      {
        title: "EIP712",
        description:
          "Изучение стандарта EIP712 и его применение в доверительной валидации логики.",
      },
      {
        title: "Upgradable смарт-контракты",
        description:
          "Паттерны Proxy и Delegatecall для создания обновляемых контрактов.",
      },
      {
        title: "Продвинутый Access Control",
        description:
          "Реализация ролевых моделей (Role-Based Access Control) с OpenZeppelin.",
      },
      {
        title: "Взаимодействие с децентрализованными протоколами",
        description:
          "Принципы работы DEX и пулов ликвидности, написание контракта для взаимодействия с Uniswap.",
      },
    ],
  },
];

const Accordion = () => {
  const [activeElements, setActiveElements] = useState<{
    [key: string]: string;
  }>({});

  const contentRefs: any = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleClick = (moduleIndex: string, value: string) => {
    setActiveElements((prevState) => ({
      ...prevState,
      [moduleIndex]: prevState[moduleIndex] === value ? "" : value,
    }));
  };

  return (
    <section className="max-w-[1360px] mx-auto mt-[90px] lg:mt-[160px] px-[28px] lg:px-[60px] bg-[#FFFFFF] rounded-[20px] pb-[30px] lg:pb-[100px]">
      <h1 className="bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black py-[30px] lg:py-[80px] flex justify-center px-[15px] text-center">
        Программа Курса
      </h1>

      <div>
        {accordionData.map((module: any, moduleIndex: any) => (
          <div key={moduleIndex} className="module-container bg-white">
            <div
              className={`module-header bg-[#FAECF2] rounded-[8px] md:rounded-[20px] flex justify-between mt-[32px] md:mt-[100px] sticky top-0 z-${
                accordionData.length - moduleIndex
              }`}
            >
              <h2 className="medium text-[24px] leading-[28px] text-[#0E0E0E] md:text-[44px] md:leading-[57px] py-[11.5px] md:py-[24px] pl-[10px] md:pl-[40px]">
                {module.module}
              </h2>
              <h2 className="text-[16px] leading-[20px] text-[#0E0E0E] md:text-[44px] md:leading-[57px] py-[11.5px] md:py-[24px] pr-[10px] md:pr-[10px]">
                {module.title}
              </h2>
            </div>

            <div className="accordion-content">
              {module.accordionItems.map((item: any, itemIndex: any) => (
                <div
                  key={itemIndex}
                  className="border-b border-neutral-200 dark:border-neutral-600"
                >
                  <h3
                    className="mb-0"
                    id={`heading-${moduleIndex}-${itemIndex}`}
                  >
                    <button
                      className={`${
                        activeElements[moduleIndex] === item.title
                          ? "text-primary"
                          : ""
                      } group relative flex w-full items-center  border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
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
                      <span className="medium text-[16px] leading-[19px] text-[#0E0E0E] md:text-[30px] md:leading-[43px]">
                        {item.title}
                      </span>
                      <span
                        className={`${
                          activeElements[moduleIndex] === item.title
                            ? "rotate-[-180deg] -mr-1"
                            : "rotate-0"
                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-500 ease-in-out`}
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
                    id={`accordion-${moduleIndex}`}
                    ref={(el: any) =>
                      (contentRefs.current[`${moduleIndex}-${itemIndex}`] = el)
                    }
                    className={`overflow-hidden transition-all duration-300 ease-in-out  `}
                    style={{
                      maxHeight:
                        activeElements[moduleIndex] === item.title
                          ? `${contentRefs.current[`${moduleIndex}-${itemIndex}`]?.scrollHeight}px`
                          : "0",
                    }}
                  >
                    <p className="text-[#6A6A6A] text-[14px] leading-[16px] md:text-[23px] md:leading-[32px] px-5 py-2">
                      {item.description}
                    </p>
                    <br />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;

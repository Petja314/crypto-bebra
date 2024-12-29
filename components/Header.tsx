"use client";
import React, { useEffect, useState } from "react";
import { useModal } from "@/shared/hooks/ModalContext ";

interface Props {
  className?: string;
}

const headerMenu = ["О Нас", "Программа", "Лекторы", "FAQ"];
const Header: React.FC<Props> = () => {
  const { openCourseSignIn } = useModal();
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767.99) {
        setBurgerMenu(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Управляем overflow в зависимости от состояния меню
    if (burgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; // Сброс overflow
    }
  }, [burgerMenu]);

  const toggleMenu = () => {
    setBurgerMenu((prevState) => !prevState);
  };

  const sectionScrollHandler = (sectionId: any, isBurger: boolean) => {
    // console.log("sectionId", sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (isBurger) {
      setBurgerMenu((prevState) => !prevState);
    }
  };

  return (
    <header className={""}>
      {/*desktop menu*/}
      <nav className={"hidden md:block pt-[60px] mr-[56px] ml-[56px]"}>
        <ul
          className={
            "flex justify-center lg:justify-start gap-[32px] text-white leading-[33px] text-[23px] lg:text-[26px] "
          }
        >
          <a
            href="https://solidity.university/"
            className={"medium header-menu lg:text-[26px]"}
            target={"_blank"}
          >
            {" "}
            Solidity University
          </a>
          {/*<span className={"medium"}>Solidity University</span>*/}
          {headerMenu.map((item, index) => (
            <li
              key={index}
              className={"cursor-pointer lg:text-[26px]"}
              onClick={() => sectionScrollHandler(item, false)}
            >
              {item}
            </li>
          ))}
        </ul>
        <span className="block mt-[40px] h-[1px] bg-[#8C8C8C]"></span>
      </nav>

      {/*mobile menu*/}
      <div className={"pb-[55px]"}>
        <nav
          className={`z-50 bg-[#060606] fixed left-0 top-0 right-0 bottom-0 flex items-center justify-center ${
            burgerMenu ? "block animate-fadeIn" : "hidden"
          }`}
        >
          <ul className={"flex flex-col gap-5"}>
            {headerMenu.map((item, i) => (
              <li key={i} onClick={() => sectionScrollHandler(item, true)}>
                <a
                  href="#"
                  className={"text-white text-[24px] leading-[26px] medium "}
                >
                  {item}
                </a>
              </li>
            ))}
            <button
              onClick={openCourseSignIn}
              className={
                "mt-[131px] font-bold text-white border border-[#FC3193] rounded-[7px] py-[9.3px] pl-[38px] pr-[38px] bg-[#FC3193] bold-f"
              }
            >
              Записаться
            </button>
          </ul>
        </nav>

        {/*burger menu*/}
        <button
          onClick={toggleMenu}
          className={`z-50 block md:hidden absolute  top-[30px] right-[30px] h-[25px] w-[30px] `}
        >
          <span
            className={`absolute bg-white h-[3px] w-full left-0 top-[4px] transition-transform ${
              burgerMenu ? "translate-y-[7px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`absolute bg-white h-[3px] w-full left-0 top-1/2 -translate-y-1/2 transition-opacity ${
              burgerMenu ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`absolute bg-white h-[3px] w-full left-0 bottom-[4px] transition-transform ${
              burgerMenu ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import telegramIcon from "../public/assets/social-media/telegram.svg";
import linkedIcon from "../public/assets/social-media/linkedin.png";
import team from "../public/assets/team/alex.jpeg";
import Image from "next/image";

interface Props {
  className?: string;
}

const lectors = [
  {
    img: team,
    name: "Николай Семенюта",
    title: "основатель Solidity University",
    linkedin: { img: linkedIcon, href: "https://www.linkedin.com/" },
    telegram: { img: telegramIcon, href: "" },
  },
  {
    img: team,
    name: "Николай Семенюта",
    title: "основатель Solidity University",
    linkedin: { img: linkedIcon, href: "https://www.linkedin.com/" },
    telegram: { img: telegramIcon, href: "" },
  },
  {
    img: team,
    name: "Николай Семенюта",
    title: "основатель Solidity University",
    linkedin: { img: linkedIcon, href: "https://www.linkedin.com/" },
    telegram: { img: telegramIcon, href: "" },
  },
];

const Lectors: React.FC<Props> = () => {
  return (
    <div className={"px-[22px] md:px-[22px] "} id={"Лекторы"}>
      <section
        className={
          "max-w-[1360px] mx-auto mt-[60px] mb-[60px]  md:mt-[80px] md:mb-[80px] rounded-[13px] md:rounded-[20px] bg-[#E6E6E6] "
        }
      >
        <h1
          className={
            "bold-f text-[32px] lg:text-[54px] leading-[43px] lg:leading-[64px] text-black   flex justify-center  text-center py-[30px] md:pt-[60px] ` "
          }
        >
          Лекторы
        </h1>

        <div
          className={"flex justify-center  px-[26px] md:px-[30px] lg:px-[90px]"}
        >
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-[40px] sm:gap-[50px] md:gap-[72px]  mb-[60px] md:mb-[100px]  "
            }
          >
            {lectors.map((item, i) => (
              <div key={i} className={"flex flex-col "}>
                <Image
                  className={"rounded-[15px] md:rounded-[20px]"}
                  src={item.img}
                  alt={"profile-image"}
                  width={352}
                  height={328}
                />
                <div className={"mb-[16px] md:mb-[22px]"}>
                  <p
                    className={
                      "medium text-[24px] leading-[31px] lg:text-[36px] lg:leading-[40px] mt-[24px] mb-[12px] md:mt-[32px] md:mb-[12px]"
                    }
                  >
                    {item.name}
                  </p>
                  <p
                    className={
                      "text-[20px] leading-[19px] lg:text-[24px] lg:leading-[25px] "
                    }
                  >
                    {item.title}
                  </p>
                </div>
                <div className={"flex items-center gap-[9px] md:gap-[12px] "}>
                  <a href={item.linkedin.href}>
                    <Image
                      src={item.linkedin.img}
                      alt={"linkedin-icon"}
                      width={38} // Default width
                      height={40} // Default height
                      className="lg:w-[50px] lg:h-[52px]" // Additional styles for responsive behavior
                    />
                  </a>
                  <a href={item.telegram.href}>
                    <Image
                      src={item.telegram.img}
                      alt={"telegram-icon"}
                      width={38} // Default width
                      height={40} // Default height
                      className="lg:w-[50px] lg:h-[52px]" // Additional styles for responsive behavior
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lectors;

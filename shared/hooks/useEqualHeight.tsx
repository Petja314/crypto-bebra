"use client";
import { useEffect, useRef } from "react";

const useEqualHeight = (dependency: any) => {
  const ref: any = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (ref.current) {
        const items = Array.from(ref.current.children);

        // Сбрасываем высоту перед расчетом
        items.forEach((item: any) => (item.style.height = "auto"));

        // Найти максимальную высоту
        const maxHeight = Math.max(
          ...items.map((item: any) => item.getBoundingClientRect().height),
        );

        // Установить одинаковую высоту для всех элементов
        items.forEach((item: any) => {
          item.style.height = `${maxHeight}px`;
        });
      }
    };

    adjustHeight();

    // Пересчитываем высоту при изменении размера окна
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, [dependency]);

  return ref;
};

export default useEqualHeight;

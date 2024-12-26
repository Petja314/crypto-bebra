import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Solidity Bootcamp 2025 – Старт Карьеры в Блокчейн Разработке!",
  description:
    "Образовательный, трехмесячный курс по Solidity с упором на разработку смарт контрактов и построение блокчейн проектов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}

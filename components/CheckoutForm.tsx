"use client";
import { HelioCheckout } from "@heliofi/checkout-react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import React from "react";

export function YourCheckoutComponent() {
  const router = useRouter();

  const helioConfig: any = {
    paylinkId: process.env.NEXT_PUBLIC_PAYLINK_ID,
    theme: { themeMode: "light" },
    display: "inline",
    primaryColor: "#FC3193",
    neutralColor: "#F4F3F3",
    onSuccess: (event: any) => {
      console.log(event);
      try {
        router.push("/?transaction-success");
        toast(
          "✅ Оплата прошла успешно! До встречи на Solidity Bootcamp 2025 🔥",
        );
      } catch (err) {
        console.error("Error during redirect :" + err);
      }
    },
    onError: (event: any) => console.log(event),
    onPending: (event: any) => console.log(event),
    onCancel: () => console.log("Cancelled payment"),
    onStartPayment: () => console.log("Starting payment"),
  };

  return (
    <>
      <Toaster />
      <HelioCheckout config={helioConfig} />;
    </>
  );
}

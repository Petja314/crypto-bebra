import React from "react";
import { YourCheckoutComponent } from "@/components/CheckoutForm";

const PaymentPage = () => {
  return (
    <div
      className={
        "fixed inset-0 bg-[#000000E5] bg-opacity-90 flex justify-center items-center"
      }
    >
      <div className={"max-w-[1280px] mx-auto"}>
        <YourCheckoutComponent />
      </div>
    </div>
  );
};

export default PaymentPage;

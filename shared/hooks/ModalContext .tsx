"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsVisible(true);
  };
  const closeModal = () => {
    console.log("Closing modal");
    setIsVisible(false);
  };

  console.log("ModalProvider isVisible:", isVisible);

  return (
    <ModalContext.Provider value={{ isVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

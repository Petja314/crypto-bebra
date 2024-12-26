"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isCourseSignInVisible: boolean;
  isCourseConfirmationVisible: boolean;
  openCourseSignIn: () => void;
  closeCourseSignIn: () => void;
  openCourseConfirmation: () => void;
  closeCourseConfirmation: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isCourseSignInVisible, setIsCourseSignInVisible] = useState(false);
  const [isCourseConfirmationVisible, setIsCourseConfirmationVisible] =
    useState(false);

  const openCourseSignIn = () => setIsCourseSignInVisible(true);
  const closeCourseSignIn = () => setIsCourseSignInVisible(false);

  const openCourseConfirmation = () => setIsCourseConfirmationVisible(true);
  const closeCourseConfirmation = () => setIsCourseConfirmationVisible(false);

  return (
    <ModalContext.Provider
      value={{
        isCourseSignInVisible,
        isCourseConfirmationVisible,
        openCourseSignIn,
        closeCourseSignIn,
        openCourseConfirmation,
        closeCourseConfirmation,
      }}
    >
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

import { createContext, useContext } from "react";

export const ActiveMobileMenu = createContext(false);

export const useActiveMobileMenu = () => {
  return useContext(ActiveMobileMenu);
};

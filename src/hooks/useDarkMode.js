import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("dark-mode", false);
  useEffect(() => {
    // const themeCheck = theme === true;
    // return themeCheck
    //   ? document.body.classList.add("dark-mode")
    //   : document.body.classList.removie("dark-mode");
    if (theme === true) {
      return document.body.classList.add("dark-mode");
    } else {
      return document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return [theme, setTheme];
};

import { useEffect, useState } from "react";

function UseLocalStorage(key, value) {
  const [themeVal, setThemeVal] = useState(() => {
    if (localStorage.getItem(key) != null) {
      return localStorage.getItem(key);
    } else {
      localStorage.setItem(key, value);
      return localStorage.getItem(key);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, themeVal);
  }, [themeVal, setThemeVal]);

  return [themeVal, setThemeVal];
}

export default UseLocalStorage;

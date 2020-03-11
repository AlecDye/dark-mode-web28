import { useState } from "react";

// saves values to browser's localstorage (persistant data)
export const useLocalStorage = (key, initialValue) => {
  // if key present = retrieve localStorage data
  // if no key present = create new localStorage data in the shape of initialValue
  const [storedValue, setStoredValue] = useState(() => {
    // if (localStorage.getItem(key)) {
    //   return JSON.parse(localStorage.getItem(key));
    // } else {
    //   localStorage.setItem(key, JSON.stringify(initialValue));
    //   return initialValue;
    // }
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [storedValue];
};

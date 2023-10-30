import React, { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
   
      let savedValue = JSON.parse(localStorage.getItem(key));
      if (savedValue == null) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      } else {
        return JSON.parse(localStorage.getItem(key));
      }
  });

  const setValueAndLocalStorage = (passedValue) => {
    localStorage.setItem(key, JSON.stringify(passedValue));
    setValue(passedValue);
  };
  return [value, setValueAndLocalStorage];
}

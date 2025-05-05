import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setvalue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue: setvalue };//renaming setvalue as setValue
};

export default useLocalStorage;

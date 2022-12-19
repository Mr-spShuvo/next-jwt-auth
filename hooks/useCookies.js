
import { useState } from 'react';
import Cookies from 'js-cookie';

export const useCookies = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = Cookies.get(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      Cookies.set(key, JSON.stringify(valueToStore));
    } catch (e) { }
  };

  return [storedValue, setValue];
};

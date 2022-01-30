import { useState } from 'react';

export const useLocalStorage = <T>({
  key,
  defaultValue
}: {
  key: string;
  defaultValue: T;
}): [T, (set: T) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.error(
        `Fail in save Item ${newValue} in localStorage with ${key}`
      );
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};

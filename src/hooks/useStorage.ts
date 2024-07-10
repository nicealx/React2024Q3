import { useEffect, useState } from 'react';
import { STORAGE_VALUE } from '../config/constants';

export const useStorage = (initialValue?: string) => {
  const getStorageValue = localStorage.getItem(STORAGE_VALUE);
  const defaultValue = getStorageValue ? getStorageValue : initialValue ?? '';
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!value) {
      localStorage.clear();
      setValue('');
    }
    if (value) localStorage.setItem(STORAGE_VALUE, value);
  }, [value]);

  return [value, setValue] as const;
};

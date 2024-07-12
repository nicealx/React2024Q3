import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from './useStorage';
import { IPeople } from '../interfaces/interface';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchText, setSearchText] = useStorage();

  const searchHandler = useCallback(
    async (value: string) => {
      setIsLoading(true);
      const peoplesData = await getData(value);
      setIsLoading(false);
      setPeoples(peoplesData);
      setSearchText(value);
    },
    [setSearchText],
  );

  useEffect(() => {
    searchHandler(searchText);
  }, [searchHandler, searchText]);

  const initialContext = {
    isLoading,
    peoples,
    searchText,
    searchHandler,
  };

  return initialContext;
};

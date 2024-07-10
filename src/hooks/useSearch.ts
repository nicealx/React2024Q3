import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from './useStorage';
import { IPeople } from '../interfaces/interface';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchText, setSearchText] = useStorage();

  const search = useCallback(
    async (value: string) => {
      setIsLoading(true);
      const response = await getData(value);
      setIsLoading(false);
      setPeoples(response.results);
      setSearchText(value);
    },
    [setSearchText],
  );

  useEffect(() => {
    search(searchText);
  }, [search, searchText]);

  const initialContext = {
    isLoading,
    peoples,
    searchText,
    search,
  };

  return initialContext;
};

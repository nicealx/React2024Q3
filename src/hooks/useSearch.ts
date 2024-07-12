import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from './useStorage';
import { IPeople } from '../interfaces/interface';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('searchText'));
  const [searchText, setSearchText] = useStorage(search ?? '');

  const searchHandler = useCallback(
    async (value: string) => {
      setIsLoading(true);
      const peoplesData = await getData(value);
      setIsLoading(false);
      setPeoples(peoplesData);
      setSearch(value);
      setSearchText(value);
      setSearchParams({ searchText });
    },
    [setSearchText, setSearchParams, searchText],
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

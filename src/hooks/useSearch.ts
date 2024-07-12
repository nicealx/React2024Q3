import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from './useStorage';
import { IPeople } from '../interfaces/interface';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [searchText, setSearchText] = useStorage(query ?? '');

  const searchHandler = useCallback(
    async (query: string) => {
      setIsLoading(true);
      setSearchParams({ query });
      setSearchText(query);
      setQuery(query);
      const peoplesData = await getData(query);
      setIsLoading(false);
      setPeoples(peoplesData);
    },
    [setSearchText, setSearchParams],
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

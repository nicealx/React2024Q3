import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from './useStorage';
import { IAppContext, IPeople } from '../interfaces/interface';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState<string[]>([]);
  const [query, setQuery] = useState<string>(searchParams.get('query') || '');
  const [page, setPage] = useState<string>(searchParams.get('page') || '1');
  const [searchText, setSearchText] = useStorage(query);

  const searchHandler = useCallback(
    async (query: string, page: string) => {
      setIsLoading(true);
      setSearchParams({ query, page });
      setSearchText(query);
      setQuery(query);
      const peoplesData = await getData(query, page);
      setIsLoading(false);
      setPages(peoplesData.pages);
      setPeoples(peoplesData.results);
    },
    [setSearchText, setSearchParams],
  );

  useEffect(() => {
    searchHandler(searchText, page);
  }, [searchHandler, searchText, page]);

  const initialContext: IAppContext = {
    isLoading,
    peoples,
    searchText,
    page,
    pages,
    setPage,
    searchHandler,
  };

  return initialContext;
};

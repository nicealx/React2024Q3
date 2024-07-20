import { useCallback, useEffect, useState } from 'react';
import { getData } from '../services/data/data-adapter';
import { useStorage } from '../hooks/useStorage';
import { IAppContext, IPeople } from '../interfaces/interface';
import { useSearchParams } from 'react-router-dom';
import { QUERY_PAGE_NAME, QUERY_SEARCH_NAME } from '../config/constants';

export const InitialContext = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peoples, setPeoples] = useState<IPeople[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState<string>(
    searchParams.get(QUERY_SEARCH_NAME) || '',
  );
  const [page, setPage] = useState<string>(
    searchParams.get(QUERY_PAGE_NAME) || '1',
  );
  const [searchText, setSearchText] = useStorage(search);

  const searchHandler = useCallback(
    async (query: string, page: string) => {
      setIsLoading(true);
      setSearchText(query);
      setSearch(query);
      const peoplesData = await getData(query, page);
      setPages(peoplesData.pages);
      setPeoples(peoplesData.results);
      setIsLoading(false);
    },
    [setSearchText],
  );

  useEffect(() => {
    setSearchText(search);
  }, [setSearchText, search]);

  useEffect(() => {
    setSearchParams({ search, page });
  }, [setSearchParams, search, page]);

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

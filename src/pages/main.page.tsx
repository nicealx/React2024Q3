import { Header } from '../modules/header';
import { getData } from '../services/data/data-adapter';
import { ErrorBoundary } from '../components';
import { FC, useCallback, useEffect, useState } from 'react';
import { IPeople } from '../interfaces/interface';
import { Main } from '../modules/main';
import { useStorage } from '../hooks/useSaveStorage';

export const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<IPeople[]>([]);
  const [searchText, setSearchText] = useStorage();

  const search = useCallback(
    async (value: string) => {
      setIsLoading(true);
      const response = await getData(value);
      setIsLoading(false);
      setCards(response.results);
      setSearchText(value);
    },
    [setSearchText],
  );

  useEffect(() => {
    search(searchText);
  }, [search, searchText]);

  return (
    <ErrorBoundary>
      <Header isLoading={isLoading} search={search} />
      <Main isLoading={isLoading} cards={cards} searchText={searchText} />
    </ErrorBoundary>
  );
};

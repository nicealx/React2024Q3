import { Header } from '../modules/header';
import { getData } from '../services/data/data-adapter';
import { ErrorBoundary } from '../components';
import { FC, useCallback, useEffect, useState } from 'react';
import { IPeople } from '../interfaces/interface';
import { Main } from '../modules/main';
import { useStorage } from '../hooks/useStorage';
import { AppContext } from '../store/AppContext';

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

  const initialContext = {
    isLoading,
    cards,
    searchText,
  };

  return (
    <AppContext.Provider value={initialContext}>
      <ErrorBoundary>
        <Header search={search} />
        <Main />
      </ErrorBoundary>
    </AppContext.Provider>
  );
};

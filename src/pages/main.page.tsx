import { Header } from '../modules/header';
import { ls } from '../config/constants';
import { getData } from '../services/data/data-adapter';
import { ErrorBoundary } from '../components';
import { FC, useEffect, useState } from 'react';
import { IPeople } from '../interfaces/interface';
import { Main } from '../modules/main';

export const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState<IPeople[]>([]);
  const [searchText, setSearchText] = useState(ls.getValue());

  const search = async (value: string) => {
    ls.setValue(value);
    setSearchText(value);
    setIsLoading(true);
    const response = await getData(value);
    setIsLoading(false);
    setCards(response.results);
  };

  useEffect(() => {
    search(searchText);
  }, [searchText]);

  return (
    <ErrorBoundary>
      <Header isLoading={isLoading} searchText={searchText} search={search} />
      <Main isLoading={isLoading} cards={cards} searchText={searchText} />
    </ErrorBoundary>
  );
};

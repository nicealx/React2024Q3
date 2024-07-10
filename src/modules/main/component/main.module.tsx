import { FC } from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { IPeople } from '../../../interfaces/interface';
import './main.css';

interface IMain {
  isLoading: boolean;
  cards: IPeople[];
  searchText: string;
}

export const Main: FC<IMain> = ({ isLoading, cards, searchText }) => {
  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : cards.length ? (
        <Cards cards={cards}></Cards>
      ) : (
        <NotFound searchText={searchText} />
      )}
    </main>
  );
};

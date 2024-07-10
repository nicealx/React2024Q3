import { FC, useContext } from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import './main.css';

export const Main: FC = () => {
  const { isLoading, cards, searchText } = useContext(AppContext);
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

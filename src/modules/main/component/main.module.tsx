import { FC, useContext } from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import './main.css';

export const Main: FC = () => {
  const { isLoading, peoples, searchText } = useContext(AppContext);
  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : peoples.length ? (
        <Cards cards={peoples}></Cards>
      ) : (
        <NotFound searchText={searchText} />
      )}
    </main>
  );
};

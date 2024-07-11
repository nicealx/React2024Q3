import { FC, useContext } from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import './main.css';
import { Outlet } from 'react-router-dom';

export const Main: FC = () => {
  const { isLoading, peoples, searchText } = useContext(AppContext);
  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : peoples.length ? (
        <>
          <Cards cards={peoples}></Cards>
          <Outlet />
        </>
      ) : (
        <NotFound searchText={searchText} />
      )}
    </main>
  );
};

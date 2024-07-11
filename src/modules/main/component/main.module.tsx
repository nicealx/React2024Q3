import { FC, useContext } from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import { Outlet } from 'react-router-dom';
import './main.css';

export const Main: FC = () => {
  const { isLoading, peoples, searchText } = useContext(AppContext);
  return (
    <main className="main">
      {isLoading ? (
        <Loader />
      ) : peoples.length ? (
        <>
          <div className="main__wrap">
            <Cards cards={peoples} />
          </div>
          <Outlet />
        </>
      ) : (
        <NotFound searchText={searchText} />
      )}
    </main>
  );
};

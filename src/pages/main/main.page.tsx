import { Header } from '../../modules/header';
import { ErrorBoundary } from '../../components';
import { FC } from 'react';
import { Main } from '../../modules/main';
import { AppContext } from '../../store/AppContext';
import { Pagination } from '../../components/pagination/pagination.component';
import { InitialContext } from '../../store/InitialContext';

export const MainPage: FC = () => {
  const initialContext = InitialContext();

  return (
    <AppContext.Provider value={initialContext}>
      <ErrorBoundary>
        <Header />
        <Main />
        <Pagination />
      </ErrorBoundary>
    </AppContext.Provider>
  );
};

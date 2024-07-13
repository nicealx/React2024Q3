import { Header } from '../../modules/header';
import { ErrorBoundary } from '../../components';
import { FC } from 'react';
import { Main } from '../../modules/main';
import { AppContext } from '../../store/AppContext';
import { useSearch } from '../../hooks/useSearch';
import { Pagination } from '../../components/pagination/pagination.component';

export const MainPage: FC = () => {
  const initialContext = useSearch();

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

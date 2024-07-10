import { FC, useContext } from 'react';
import { Search } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import './header.css';

export const Header: FC = () => {
  const { isLoading, search } = useContext(AppContext);
  return (
    <header className="header">
      <Search isLoading={isLoading} search={search} />
    </header>
  );
};

import { FC } from 'react';
import { Search } from '../../../components';
import './header.css';

export const Header: FC = () => {
  return (
    <header className="header">
      <Search />
    </header>
  );
};

import { FC } from 'react';
import { Search } from '../../../components';
import './header.css';

interface IHeader {
  isLoading: boolean;
  search: (value: string) => void;
}

export const Header: FC<IHeader> = ({ isLoading, search }) => {
  return (
    <header className="header">
      <Search isLoading={isLoading} search={search} />
    </header>
  );
};

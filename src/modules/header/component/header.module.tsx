import { FC } from 'react';
import { Search } from '../../../components';
import './header.css';

interface IHeader {
  isLoading: boolean;
  searchText: string;
  search: (value: string) => void;
}

export const Header: FC<IHeader> = ({ isLoading, searchText, search }) => {
  return (
    <header className="header">
      <Search isLoading={isLoading} searchText={searchText} search={search} />
    </header>
  );
};

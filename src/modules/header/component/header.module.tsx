import { FC, useContext } from 'react';
import { Search } from '../../../components';
import { AppContext } from '../../../store/AppContext';
import './header.css';

interface IHeader {
  search: (value: string) => void;
}

export const Header: FC<IHeader> = ({ search }) => {
  const { isLoading } = useContext(AppContext);
  return (
    <header className="header">
      <Search isLoading={isLoading} search={search} />
    </header>
  );
};

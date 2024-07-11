import { ChangeEvent, FC, FormEvent } from 'react';
import { useStorage } from '../../hooks/useStorage';
import './search.css';
import { Button } from '../button/button.component';

interface ISearch {
  isLoading: boolean;
  search: (value: string) => void;
}

export const Search: FC<ISearch> = ({ isLoading, search }) => {
  const [searchText, setSearchText] = useStorage();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    search(searchText);
  };

  return (
    <form className="search" action="" onSubmit={handleSearch}>
      <input
        className="search__input"
        type="text"
        name="search"
        onChange={handleInputChange}
        value={searchText}
        placeholder="Enter character name..."
        disabled={isLoading}
      />
      <Button
        buttonClass="search__button"
        buttonType="submit"
        buttonStatus={isLoading}
        buttonText="Search"
      />
    </form>
  );
};

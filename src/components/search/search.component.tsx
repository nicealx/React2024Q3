import { ChangeEvent, FC, FormEvent, useState } from 'react';
import './search.css';

interface ISearch {
  isLoading: boolean;
  searchText: string;
  search: (value: string) => void;
}

export const Search: FC<ISearch> = ({ isLoading, searchText, search }) => {
  const [searchValue, setSearchValue] = useState<string>(searchText);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form className="search" action="" onSubmit={handleSearch}>
      <input
        className="search__input"
        type="text"
        name="search"
        onChange={handleInputChange}
        value={searchValue}
        placeholder="Enter character name..."
        disabled={isLoading}
      />
      <button className="search__button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
};

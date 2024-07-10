import { ChangeEvent, FC, FormEvent } from 'react';
import './search.css';
import { useStorage } from '../../hooks/useStorage';

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
      <button className="search__button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  );
};

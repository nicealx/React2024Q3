import { ChangeEvent, FC, FormEvent, useContext } from 'react';
import { useStorage } from '../../hooks/useStorage';
import './search.css';
import { Button } from '../button/button.component';
import { AppContext } from '../../store/AppContext';

export const Search: FC = () => {
  const [searchText, setSearchText] = useStorage();
  const { isLoading, search } = useContext(AppContext);

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

import { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import { useStorage } from '../../hooks/useStorage';
import { Button } from '../button/button.component';
import { AppContext } from '../../store/AppContext';
import './search.css';
import { useSearchParams } from 'react-router-dom';

export const Search: FC = () => {
  const { isLoading, searchHandler } = useContext(AppContext);
  const [searchParams] = useSearchParams();
  const [search] = useState(searchParams.get('searchText'));
  const [searchText, setSearchText] = useStorage(search ?? '');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    searchHandler(searchText);
  };

  return (
    <form className="search" action="" onSubmit={handleSubmit}>
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
        buttonClass="button search__button"
        buttonType="submit"
        buttonStatus={isLoading}
        buttonText="Search"
      />
    </form>
  );
};

import React, { FormEvent } from 'react';
import { getItem } from '../../services/item/item-adapter';
import { ls } from '../../config/constants';
import './search.css';

interface ISearch {
  searchText: string;
}

export class Search extends React.Component<ISearch> {
  state = {
    searchText: this.props.searchText,
  };

  componentDidMount(): void {
    this.search(this.state.searchText);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const searchValue = this.state.searchText;
    ls.setValue(searchValue);
    this.search(searchValue);
  };

  async search(value: string) {
    const response = await getItem(value);
    console.log(response);
  }

  render() {
    return (
      <form className="search" action="" onSubmit={this.handleSearch}>
        <input
          className="search__input"
          type="text"
          name="search"
          onChange={this.handleInputChange}
          value={this.state.searchText}
          placeholder="Enter character name..."
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

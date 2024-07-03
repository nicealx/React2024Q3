import React, { FormEvent } from 'react';
import { getItem } from '../../services/item/item-adapter';
import { ls } from '../../config/constants';

interface ISearch {
  searchText: string;
}

export class Search extends React.Component<ISearch> {
  state = {
    searchText: this.props.searchText,
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const searchValue = this.state.searchText;
    ls.setValue(searchValue);
    const response = await getItem(searchValue);
    console.log(response);
  };

  render() {
    return (
      <form className="search" action="" onSubmit={this.handleSearch}>
        <input
          type="text"
          name="search"
          onChange={this.handleInputChange}
          value={this.state.searchText}
          placeholder="Enter character name..."
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

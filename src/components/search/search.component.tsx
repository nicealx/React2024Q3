import React, { FormEvent } from 'react';
import './search.css';

interface ISearch {
  isLoading: boolean;
  searchText: string;
  search: (value: string) => void;
}

export class Search extends React.Component<ISearch> {
  state = {
    searchText: this.props.searchText,
  };

  componentDidMount(): void {
    this.props.search(this.state.searchText);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    const searchValue = this.state.searchText;
    this.props.search(searchValue);
  };

  render() {
    const isLoading = this.props.isLoading;
    return (
      <form className="search" action="" onSubmit={this.handleSearch}>
        <input
          className="search__input"
          type="text"
          name="search"
          onChange={this.handleInputChange}
          value={this.state.searchText}
          placeholder="Enter character name..."
          disabled={isLoading}
        />
        <button className="search__button" type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
    );
  }
}

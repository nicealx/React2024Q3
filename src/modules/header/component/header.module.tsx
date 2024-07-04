import React from 'react';
import { Search } from '../../../components';
import './header.css';

interface IHeader {
  isLoading: boolean;
  searchText: string;
  search: (value: string) => void;
}

export class Header extends React.Component<IHeader> {
  render() {
    return (
      <header className="header">
        <Search
          isLoading={this.props.isLoading}
          searchText={this.props.searchText}
          search={this.props.search}
        />
      </header>
    );
  }
}

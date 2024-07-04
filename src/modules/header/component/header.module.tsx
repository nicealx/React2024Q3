import React from 'react';
import { Search } from '../../../components';
import './header.css';

interface IHeader {
  searchText: string;
  search: (value: string) => void;
}

export class Header extends React.Component<IHeader> {
  render() {
    return (
      <header className="header">
        <Search searchText={this.props.searchText} search={this.props.search} />
      </header>
    );
  }
}

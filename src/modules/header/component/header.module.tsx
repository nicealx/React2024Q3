import React from 'react';
import './header.css';
import { Search } from '../../../components';
import { ls } from '../../../config/constants';

export class Header extends React.Component {
  state = {
    searchText: ls.getValue(),
  };

  render() {
    return (
      <header className="header">
        <Search searchText={this.state.searchText} />
      </header>
    );
  }
}

import React from 'react';
import { Search } from '../../../components';
import { ls } from '../../../config/constants';
import './header.css';

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

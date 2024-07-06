import { Component } from 'react';
import { Search } from '../../../components';
import './header.css';

interface IHeader {
  isLoading: boolean;
  searchText: string;
  search: (value: string) => void;
}

export class Header extends Component<IHeader> {
  state = {
    chashed: false,
  };

  handleChash = () => {
    this.setState({
      chashed: true,
    });
  };

  render() {
    if (this.state.chashed) {
      throw new Error('I crashed!');
    }
    return (
      <header className="header">
        <button className="error__button" onClick={this.handleChash}>
          Test Crash
        </button>
        <Search
          isLoading={this.props.isLoading}
          searchText={this.props.searchText}
          search={this.props.search}
        />
      </header>
    );
  }
}

import React from 'react';
import { Header } from '../modules/header';
import { Main } from '../modules/main';
import { ls } from '../config/constants';
import { getItem } from '../services/item/item-adapter';
import { ErrorBoundary } from '../components';

export default class MainPage extends React.Component {
  state = {
    isLoading: true,
    cards: [],
    searchText: ls.getValue(),
    search: async (value: string) => {
      ls.setValue(value);
      this.setState({
        isLoading: true,
        searchText: ls.getValue(),
      });
      const response = await getItem(value);
      this.setState({
        isLoading: false,
        cards: response.results,
      });
    },
  };

  render() {
    return (
      <ErrorBoundary>
        <Header
          isLoading={this.state.isLoading}
          searchText={this.state.searchText}
          search={this.state.search}
        />
        <Main
          isLoading={this.state.isLoading}
          cards={this.state.cards}
          searchText={this.state.searchText}
        />
      </ErrorBoundary>
    );
  }
}

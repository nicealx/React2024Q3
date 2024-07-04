import React from 'react';
import { Header } from '../modules/header';
import { Main } from '../modules/main';
import { ls } from '../config/constants';
import { getItem } from '../services/item/item-adapter';

export default class MainPage extends React.Component {
  state = {
    isLoading: true,
    cards: [],
    searchText: ls.getValue(),
    search: async (value: string) => {
      this.setState({
        isLoading: true,
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
      <>
        <Header searchText={this.state.searchText} search={this.state.search} />
        <Main isLoading={this.state.isLoading} cards={this.state.cards} />
      </>
    );
  }
}

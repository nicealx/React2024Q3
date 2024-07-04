import React from 'react';
import { Cards, Loader, NotFound } from '../../../components';
import { IDataCard } from '../../../interfaces/interface';
import './main.css';

interface IMain {
  isLoading: boolean;
  cards: IDataCard[];
  searchText: string;
}

export class Main extends React.Component<IMain> {
  render() {
    const isLoading = this.props.isLoading;
    const cards = this.props.cards;
    return (
      <main className="main">
        {isLoading ? (
          <Loader />
        ) : cards.length ? (
          <Cards cards={cards}></Cards>
        ) : (
          <NotFound searchText={this.props.searchText} />
        )}
      </main>
    );
  }
}

import React from 'react';
import { Cards } from '../../../components';
import { Loader } from '../../../components/loader/loader.component';
import { IDataCard } from '../../../interfaces/interface';
import './main.css';

interface IMain {
  isLoading: boolean;
  cards: IDataCard[];
}

export class Main extends React.Component<IMain> {
  render() {
    const isLoading = this.props.isLoading;
    return (
      <main className="main">
        {isLoading ? <Loader /> : <Cards cards={this.props.cards}></Cards>}
      </main>
    );
  }
}

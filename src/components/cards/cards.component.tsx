import { Card } from '../card/card.compomemt';
import { IDataCard } from '../../interfaces/interface';
import { Component } from 'react';
import './cards.css';

interface ICards {
  cards: IDataCard[];
}

export class Cards extends Component<ICards> {
  render() {
    const cards = this.props.cards;
    return (
      <div className="card__list">
        {cards.map((card) => (
          <Card key={card.name} data={card} />
        ))}
      </div>
    );
  }
}

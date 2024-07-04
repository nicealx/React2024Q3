import React from 'react';
import { Card } from '../card/card.compomemt';
import { IDataCard } from '../../interfaces/interface';
import './cards.css';

interface ICards {
  cards: IDataCard[];
}

export class Cards extends React.Component<ICards> {
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

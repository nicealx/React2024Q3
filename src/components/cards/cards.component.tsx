import { FC } from 'react';
import { Card } from '../card/card.compomemt';
import { IDataCard } from '../../interfaces/interface';
import './cards.css';

interface ICards {
  cards: IDataCard[];
}

export const Cards: FC<ICards> = ({ cards }) => {
  return (
    <div className="card__list">
      {cards.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </div>
  );
};

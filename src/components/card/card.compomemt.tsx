import { FC } from 'react';
import { IDataCard } from '../../interfaces/interface';
import './card.css';

interface ICard {
  data: IDataCard;
}

export const Card: FC<ICard> = ({ data }) => {
  const { name, height, mass, hair_color } = data;
  return (
    <div className="card__item">
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p>
          <span className="card__span">Heigth:</span> {height}
        </p>
        <p>
          <span className="card__span">Mass:</span> {mass}
        </p>
        <p>
          <span className="card__span">Hair color:</span> {hair_color}
        </p>
      </div>
      <div className="card__backdrop">{name}</div>
    </div>
  );
};

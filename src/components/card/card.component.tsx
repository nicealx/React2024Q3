import { FC } from 'react';
import { IPeople } from '../../interfaces/interface';
import { BASE_URL } from '../../config/constants';
import { NavLink } from 'react-router-dom';
import './card.css';

interface ICard {
  data: IPeople;
}

export const Card: FC<ICard> = ({ data }) => {
  const { name, url } = data;
  const id = url.replace(BASE_URL, '');
  return (
    <NavLink
      to={`info/${id}`}
      className={({ isActive, isPending }) =>
        isActive
          ? 'card card__item active'
          : isPending
            ? 'card card__item pending'
            : 'card card__item'
      }
    >
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
      </div>
      <div className="card__backdrop">{name}</div>
    </NavLink>
  );
};

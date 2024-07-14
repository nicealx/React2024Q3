import { FC } from 'react';
import { BASE_URL } from '../../config/constants';
import { NavLink } from 'react-router-dom';
import { Loader } from '../loader/loader.component';
import { ICard } from '../../interfaces/interface';
import './card.css';

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
      <Loader />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
      </div>
      <div className="card__backdrop">{name}</div>
    </NavLink>
  );
};

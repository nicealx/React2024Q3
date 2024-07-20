/// <reference types="vite-plugin-svgr/client" />
import { FC } from 'react';
import { Button } from '../../components';
import { useNavigate } from 'react-router-dom';
import DeathStar from '../../../public/death-star.svg?react';
import './404.css';

export const Page404: FC = () => {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate('..');
  };
  return (
    <div className="error-404">
      <div className="error-404__icon">
        <DeathStar />
      </div>
      <div className="error-404__info">
        <h1 className="error-404__title">404</h1>
        <p className="error-404__text">This page does not exist...</p>
        <Button
          buttonClass="button error-404__button"
          buttonType="button"
          buttonText="Back"
          handlerClick={handlerClick}
        />
      </div>
    </div>
  );
};

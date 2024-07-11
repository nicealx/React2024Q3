import { FC } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import { IPeople } from '../../interfaces/interface';
import './card-info.css';

export const CardInfo: FC = () => {
  const navigation = useNavigation();
  const people = useLoaderData() as IPeople;
  const {
    name,
    birth_year,
    eye_color,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
  } = people;

  return (
    <div
      className={
        navigation.state === 'loading' ? 'card-info loading' : 'card-info'
      }
    >
      <div className="card card-info__detail">
        <Link to={'..'} className=" card-info__close">
          &#10006;
        </Link>
        <p>
          Name: <span className="card-info__span">{name}</span>
        </p>
        <p>
          Birth year: <span className="card-info__span">{birth_year}</span>
        </p>
        <p>
          Eye color: <span className="card-info__span">{eye_color}</span>
        </p>
        <p>
          Gender: <span className="card-info__span">{gender}</span>
        </p>
        <p>
          Hair color: <span className="card-info__span">{hair_color}</span>
        </p>
        <p>
          Height: <span className="card-info__span">{height}</span>
        </p>
        <p>
          Mass: <span className="card-info__span">{mass}</span>
        </p>
        <p>
          Skin color: <span className="card-info__span">{skin_color}</span>
        </p>
      </div>
    </div>
  );
};

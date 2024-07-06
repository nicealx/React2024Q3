import { Component } from 'react';
import { IDataCard } from '../../interfaces/interface';
import './card.css';

interface ICard {
  data: IDataCard;
}

export class Card extends Component<ICard> {
  render() {
    return (
      <div className="card__item">
        <div className="card__content">
          <h2 className="card__title">{this.props.data.name}</h2>
          <p>
            <span className="card__span">Heigth:</span> {this.props.data.height}
          </p>
          <p>
            <span className="card__span">Mass:</span> {this.props.data.mass}
          </p>
          <p>
            <span className="card__span">Hair color:</span>{' '}
            {this.props.data.hair_color}
          </p>
        </div>
        <div className="card__backdrop">{this.props.data.name}</div>
      </div>
    );
  }
}

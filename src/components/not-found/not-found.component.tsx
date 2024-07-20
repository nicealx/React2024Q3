import { FC } from 'react';

interface INotFound {
  text: string;
}

export const NotFound: FC<INotFound> = ({ text }) => <h2>{text}</h2>;

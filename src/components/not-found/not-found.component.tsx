import { FC } from 'react';

interface INotFound {
  searchText: string;
}

export const NotFound: FC<INotFound> = ({ searchText }) => (
  <h2>Nothing was found for the query "{searchText}"</h2>
);

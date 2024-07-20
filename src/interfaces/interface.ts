import { Dispatch, SetStateAction } from 'react';

export interface IPeople {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
  detail?: string;
}

export interface IPeopleData {
  results: IPeople[];
  count: number;
  pages: string[];
}

export interface IAppContext {
  isLoading: boolean;
  peoples: IPeople[];
  searchText: string;
  page: string;
  pages: string[];
  setPage: Dispatch<SetStateAction<string>>;
  searchHandler: (value: string, page: string) => Promise<void>;
}

export type ICard = {
  data: Pick<IPeople, 'name' | 'url'>;
};

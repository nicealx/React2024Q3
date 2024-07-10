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
}

export interface IData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPeople[];
}

export type IDataCard = Pick<
  IPeople,
  'name' | 'hair_color' | 'height' | 'mass'
>;

export interface IAppContext {
  isLoading: boolean;
  cards: IPeople[];
  searchText: string;
  search: (value: string) => Promise<void>;
}

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
  detail: string;
}

export interface IPeopleData {
  results: IPeople[];
}

export interface IAppContext {
  isLoading: boolean;
  peoples: IPeople[];
  searchText: string;
  searchHandler: (value: string) => Promise<void>;
}

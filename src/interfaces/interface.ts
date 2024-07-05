export interface IDataCard {
  name: string;
  hair_color: string;
  height: string;
  mass: string;
}

export interface IData {
  count: number;
  next: string | null;
  previous: string | null;
  results: [key: string];
}

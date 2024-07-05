import { IData } from '../../interfaces/interface';
import { fetchData } from './data-service';

const dataAdapter = (item: IData) => {
  const { count, results, next, previous } = item;
  return {
    count,
    results,
    next,
    previous,
  };
};

export const getData = async (text: string) => {
  const response = await fetchData(text);
  return dataAdapter(response);
};

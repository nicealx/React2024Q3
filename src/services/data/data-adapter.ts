import { IPeopleData } from '../../interfaces/interface';
import { fetchData } from './data-service';

const dataAdapter = (item: IPeopleData) => {
  const { results } = item;
  return results;
};

export const getData = async (text: string, page = 1) => {
  const response = await fetchData(text, page);
  return dataAdapter(response);
};

import { IPeopleData } from '../../interfaces/interface';
import { fetchData } from './data-service';

const dataAdapter = (item: IPeopleData) => {
  const { results, count } = item;
  const pages: string[] = [];
  for (let i = 1; i <= Math.ceil(count / 10); i++) {
    pages.push(i.toString());
  }

  return { results, pages };
};

export const getData = async (text: string, page: string) => {
  const response = await fetchData(text, page);
  return dataAdapter(response);
};

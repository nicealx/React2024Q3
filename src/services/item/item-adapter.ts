import { fetchItem } from './item-service';

interface IItem {
  count: number;
  next: string | null;
  previous: string | null;
  results: [key: string];
}

const ItemAdapter = (item: IItem) => {
  const { count, results, next, previous } = item;
  return {
    count,
    results,
    next,
    previous,
  };
};

export const getItem = async (text: string) => {
  const response = await fetchItem(text);
  return ItemAdapter(response);
};

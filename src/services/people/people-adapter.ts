import { IPeople } from '../../interfaces/interface';
import { fetchPeople } from './people-service';

const peopleAdapter = (item: IPeople): IPeople => {
  return item;
};

export const getPeople = async (id: string): Promise<IPeople> => {
  const response = await fetchPeople(id);
  return peopleAdapter(response);
};

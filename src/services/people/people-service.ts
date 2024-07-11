import { BASE_URL } from '../../config/constants';
import { IPeople } from '../../interfaces/interface';

export const fetchPeople = async (id: string): Promise<IPeople> => {
  try {
    const requestOptions = {
      method: 'GET',
    };
    const response = await fetch(`${BASE_URL}${id}`, requestOptions);

    const data: IPeople = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request error');
  }
};

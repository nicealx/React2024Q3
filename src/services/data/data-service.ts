import { BASE_URL } from '../../config/constants';
import { IPeopleData } from '../../interfaces/interface';

export const fetchData = async (
  text: string,
  page: string,
): Promise<IPeopleData> => {
  try {
    const requestOptions = {
      method: 'GET',
    };
    const response = await fetch(
      `${BASE_URL}?search=${text}&page=${page}`,
      requestOptions,
    );

    const data: IPeopleData = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request error');
  }
};

import { BASE_URL } from '../../config/constants';
import { IData } from '../../interfaces/interface';

export const fetchData = async (text: string): Promise<IData> => {
  try {
    const requestOptions = {
      method: 'GET',
    };
    const response = await fetch(`${BASE_URL}?search=${text}`, requestOptions);

    const data: IData = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request error');
  }
};

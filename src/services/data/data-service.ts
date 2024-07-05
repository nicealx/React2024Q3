import { IData } from '../../interfaces/interface';

export const fetchData = async (text: string): Promise<IData> => {
  try {
    const requestOptions = {
      method: 'GET',
    };
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${text}`,
      requestOptions,
    );

    const data: IData = await response.json();
    return data;
  } catch (error) {
    throw new Error('Request error');
  }
};

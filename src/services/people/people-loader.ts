import { LoaderFunction } from 'react-router-dom';
import { getPeople } from './people-adapter';
import { IPeople } from '../../interfaces/interface';

interface IPeopleLoaderParams {
  id: string;
}

export const peopleLoader: LoaderFunction = async ({
  params,
}): Promise<IPeople> => {
  const typedParams = params as unknown as IPeopleLoaderParams;
  const people = await getPeople(typedParams.id);
  return people;
};

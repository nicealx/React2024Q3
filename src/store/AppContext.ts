import { createContext } from 'react';
import { IAppContext } from '../interfaces/interface';

export const AppContext = createContext<IAppContext>({
  isLoading: true,
  peoples: [],
  searchText: '',
  search: async () => {},
});

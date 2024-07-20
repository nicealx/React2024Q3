import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { CardInfo } from '../components';
import { Page404 } from '../pages/404/404.page';
import { MainPage } from '../pages/main/main.page';
import { peopleLoader } from '../services/people/people-loader';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />} errorElement={<Page404 />}>
      <Route path="*" element={<Page404 />} />
      <Route path="/info/:id" element={<CardInfo />} loader={peopleLoader} />
    </Route>,
  ),
);

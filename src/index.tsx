import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/main/main.page';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page404 } from './pages/404/404.page';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

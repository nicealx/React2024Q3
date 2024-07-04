import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main.page';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <section className="app">
      <MainPage />
    </section>
  </React.StrictMode>,
);

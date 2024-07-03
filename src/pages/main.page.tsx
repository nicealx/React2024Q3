import React from 'react';
import { Header } from '../modules/header';
import { Main } from '../modules/main';

export default class MainPage extends React.Component {
  AppContext = React.createContext({});
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

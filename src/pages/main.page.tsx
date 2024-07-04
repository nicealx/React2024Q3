import React from 'react';
import { Header } from '../modules/header';
import { Main } from '../modules/main';

export default class MainPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

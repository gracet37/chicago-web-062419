import React, { Component } from 'react'
import logo from "./logo.svg";


class Header extends Component {
  // renderDescription = () => {
  //   const remainder = store.getState().count % 5;
  //   const upToNext = 5 - remainder;
  //   return `The current count is less than ${store.getState().count + upToNext}`;
  // };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>Redux Stuff</h3>
      </header>
    );
  }
}

export default Header

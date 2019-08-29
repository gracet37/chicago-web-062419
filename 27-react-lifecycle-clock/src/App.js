import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClockContainer from './ClockContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ClockContainer />
    </div>
  );
}

export default App;

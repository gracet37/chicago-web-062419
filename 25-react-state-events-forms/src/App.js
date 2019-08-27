import React from 'react';
import TodoContainer from './TodoContainer';
import logo from './logo.svg';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      {/* Practice/review passing props "downward" into child components */}
      <TodoContainer currentDay="Tuesday" />
    </div>
  );
};

export default App;

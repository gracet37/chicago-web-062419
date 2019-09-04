import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdviceContainer from './Components/AdviceContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BEE ADVISED</h1>
        <h2>The App Where You Judge If Advice Is Good For Bees</h2>
      </header>
      <AdviceContainer />
    </div>
  );
}

export default App;

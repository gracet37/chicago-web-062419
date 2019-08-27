import React from 'react';
import './App.css';
import AnimalListContainer from './AnimalListContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          What does the mammal say?
        </h1>
        {/* Here goes an animal list
        which lists out all the animals we have
        and the sounds they make */}
        <AnimalListContainer />
      </header>
    </div>
  );
}

export default App;

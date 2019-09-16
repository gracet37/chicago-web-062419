import React, { Component } from 'react'
import Header from './Header'
import Counter from './Counter'


class App extends Component {
  // state = { count: 0 };

  componentDidMount() {
    // store.subscribe(() => this.forceUpdate())
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App

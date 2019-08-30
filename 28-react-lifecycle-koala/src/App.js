import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector';
import Grandma from './components/Grandma'

class App extends Component {

  render() {
    return (
      <div id='app'>
        <WidgetSelector />
      </div>
    )
  }
}

export default App;

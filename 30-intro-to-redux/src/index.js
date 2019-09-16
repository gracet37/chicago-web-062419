import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (oldState={ count: 0 }, action) => {
  // console.log("action", action, "stored state", oldState)
  switch(action.type) {
    case 'CLICKED_PLUS':
      const foobar = oldState.count + 1
      return { count: foobar }
    case 'CLICKED_MINUS':
      return { count: oldState.count - 1 }
    case 'RESET_COUNTER':
      return { count: 0 }
    default: return oldState;
  }

}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

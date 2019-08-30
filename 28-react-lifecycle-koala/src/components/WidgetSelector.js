import React, { Component } from 'react';
import RandomKoala from './RandomKoala';
import StockTicker from './StockTicker';

class WidgetSelector extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: "stock"}

    this.handleWidgetSelection = this.handleWidgetSelection.bind(this);
  }

  handleWidgetSelection(event) {
    this.setState({ selected: event.target.id })
  }


  render () {
    return (
      <div className="widget-selector-wrapper">
        <button id="koala" onClick={this.handleWidgetSelection}>Random Koala</button>
        <button id="stock" onClick={this.handleWidgetSelection}>Stock Ticker</button>
        <div className="app-children">
          { this.state.selected === "koala" ?
            <RandomKoala />
          :
            "" }
          { this.state.selected === "stock" ?
            <StockTicker />
          :
            "" }
        </div>
      </div>
    )
  }
}

export default WidgetSelector

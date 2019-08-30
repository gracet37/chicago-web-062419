import React, { Component } from 'react'

class StockTicker extends Component {

  constructor() {
    super();
    this.state = { stockName: "FLTN", stockValue: 54, stockDidGoUp: false }
    this.updateStock = this.updateStock.bind(this);
  }

  componentDidMount() {
    this.stockTimer = setInterval(this.updateStock, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.stockTimer)
  }

  updateStock() {
    const newStockValue = Math.floor(Math.random() * 200);
    this.setState((prevState) => {
      const oldStockValue = prevState.stockValue;
      const stockWentUp = oldStockValue < newStockValue;
      return { stockValue: newStockValue, stockDidGoUp: stockWentUp }
    });
  }

  render () {
    return (
      <div className="app-children">
        <br/>
        <br/>
        <div id="ticker" style={{backgroundColor: this.state.stockDidGoUp ? 'green' : 'red'}}>
          <h2>{this.state.stockName}</h2>
          <div>
            {this.state.stockValue}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker

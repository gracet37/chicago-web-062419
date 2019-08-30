import React, { Component } from 'react'
import Parent from './Parent'

class Grandma extends Component {
  constructor() {
    super();

    this.state = { motto: "Family matters!" }

    this.changeMotto = this.changeMotto.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("HELLO FROM GRANDMA");
  }

  componentDidMount() {
    console.log("Grandma componentDidMount")
  }
  componentDidUpdate() {
    console.log("Grandma componentDidUpdate")
  }

  changeMotto() {
    this.setState({ motto: "FAMILY MATTERS!" });
  }

  render () {
    return (
      <div className="app-children">
        <br/>
        <br/>
        <div id="grandma">
          <h2>Grandma says:</h2>
          <div>
            { this.state.motto }
          </div>
        </div>
        <Parent motto={this.state.motto} changeMotto={this.changeMotto} />
      </div>
    )
  }
}

export default Grandma

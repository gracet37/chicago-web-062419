import React, { Component } from 'react'
import Kiddo from './Kiddo'

class Parent extends Component {

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("HELLO FROM PARENT");
  }

  componentDidMount() {
    console.log("Parent componentDidMount")
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate")
  }

  render () {
    return (
      <div className="app-children">
        <br/>
        <br/>
        <div id="parent">
          <h2>Parent says:</h2>
          <div>
            { this.props.motto }
          </div>
        </div>
        <Kiddo motto={this.props.motto} changeMotto={ this.props.changeMotto } />
      </div>
    )
  }
}

export default Parent

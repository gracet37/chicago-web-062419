import React, { Component } from 'react'

class Kiddo extends Component {

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("HELLO FROM KIDDO");
  }

  componentDidMount() {
    console.log("Kiddo componentDidMount")
  }

  componentDidUpdate() {
    console.log("Kiddo componentDidUpdate")
  }

  render () {
    return (
      <div className="app-children">
        <br/>
        <br/>
        <div id="kiddo">
          <h2>Kiddo says:</h2>
          <div>
            { this.props.motto }
          </div>
        </div>
        <button onClick={ this.props.changeMotto }>UPCASE!!!</button>
      </div>
    )
  }
}

export default Kiddo

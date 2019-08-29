import React, { Component } from 'react';
import Clock from './Clock';

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { renderClock: true };

    this.toggleClock = this.toggleClock.bind(this);
  }

  toggleClock() {
    this.setState((prevState) => {
      return { renderClock: !prevState.renderClock };
    });
  }

  render() {
    return (
      <div id="clock-container">
        { this.state.renderClock
          ?
          <Clock />
          :
          <p><em>Clock was removed!</em></p>
        }
        <button onClick={this.toggleClock}>Toggle the Clock!</button>
      </div>
    )
  }

}

export default ClockContainer

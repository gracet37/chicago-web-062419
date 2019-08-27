import React, { Component } from 'react';

class InputLogger extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    if (!e.target.value.includes('a')) {
      this.setState({ text: e.target.value });
    }
  }

  render() {
    console.log('InputLogger is re-rendering');
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.text} />
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default InputLogger;

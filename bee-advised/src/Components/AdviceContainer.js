// Responsible for holding the advice button and advice pane and the comments container as direct children (siblins of one another). Also holds the state that those elements need to share (gotten from https://api.adviceslip.com/advice)

// ALSO also holds instructions for changing shared state

import BuzzerButton from './BuzzerButton'
import CommentsContainer from './CommentsContainer'
import AdviceCard from './AdviceCard'

import React, { Component } from 'react'

class AdviceContainer extends Component {
  constructor() {
    super();
    this.state = {
      "advice": {
        "body": "Bee yourself, all abuzz with anticipation...",
        "slip_id": "0"
      }
    }
    // Went with arrow function instead of binding literally
    // this.getRandomAdvice = this.getRandomAdvice.bind(this);
  }
  // As soon as this component hits the container, let's grab some random advice and update our state with it (to see if it works!)
  componentDidMount() {
    this.getRandomAdvice()
  }

  getRandomAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then((adviceSlip) => {
        const slip = adviceSlip.slip
        // By having this as an arrow function, "this" will always refer to the AdviceContainer, no matter who calls this function
        this.setState({advice: {body: slip.advice, slip_id: slip.slip_id}})
      })
  }

  render() {
    return(
      <div>
        <BuzzerButton adviceFunction={this.getRandomAdvice}/>
        <AdviceCard adviceBody={ this.state.advice.body }/>
        <CommentsContainer />
      </div>
    )
  }
}

export default AdviceContainer

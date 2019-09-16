import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="Counter">
        <h1>{ this.props.foobar }</h1>
        <button onClick={ this.props.decrement }> - </button>
        <button onClick={ this.props.increment }> + </button>
        <button onClick={ this.props.reset }> -_- </button>
        { /* <button onClick={this.incrementThree}> +++ </button>
        <input type='number' name="new-amount" onChange={this.handleNewAmount} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foobar: state.count
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch( { type: 'CLICKED_PLUS' } )
    },
    decrement: () => {
      dispatch( { type: 'CLICKED_MINUS' } )
    },
    reset: () => {
      dispatch( { type: 'RESET_COUNTER' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default Counter

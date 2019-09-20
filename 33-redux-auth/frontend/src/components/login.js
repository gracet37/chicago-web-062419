import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import  { registerUser } from '../actions';

class Signup extends Component {
  state = {
    username: "",
    password: "",
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.registerUser(this.state, this.props.history)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (formData, history) => dispatch(registerUser(formData, history))
  }
}


export default connect(null, mapDispatchToProps)(withRouter(Signup));







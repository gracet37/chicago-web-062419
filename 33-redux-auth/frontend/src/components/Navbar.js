import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from '../actions/index';
import { connect } from 'react-redux'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'green'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: newColor });
  }

  handleLogout() {
    this.props.logoutUser()
    localStorage.removeItem('token')
    this.props.history.push('/signup')

    // redirect to login page
  }

  render() {
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <Link to='/' className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <div className="item">
            <button onClick={() => this.handleLogout()}> Sign Out </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}


export default connect(null, mapDispatchToProps)(withRouter(Navbar));







import React from 'react';

import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <div className={`ui top fixed inverted ${props.color} menu`}>
      <Link to="/paintings/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <div className="right menu">
        <Link className="item" to="/">about</Link>
        <Link className="item" to="/paintings/new">new</Link>
        <a className="item">
          <div className="ui primary button">Sign In</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

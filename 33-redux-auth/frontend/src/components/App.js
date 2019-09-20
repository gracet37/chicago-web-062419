import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Profile from './Profile';
import { currentUser } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount(){
    this.props.currentUser(this.props.history)
  }

  render(){
    return (
        <div className="App">
          <Navbar icon="paint brush" title="Painterest" description="out app" />
          <Switch>
            <Route path='/signup' component={Login} />
            <Route path='/' component={Profile} />
          </Switch>
        </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return {
    currentUser: (history) => dispatch(currentUser(history))
  }
}


export default connect(null, mapDispatchToProps)(withRouter(App));

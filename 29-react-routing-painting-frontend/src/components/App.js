import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import PaintingsContainer from './PaintingsContainer';
import PaintingsNew from './PaintingsNew';
import { Route, Switch  } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />
        <div className="ui container grid">
          <div id="content" className="sixteen wide column">

            <Route path="/" exact component={About} />
            <Switch>
              <Route path="/paintings/new" component={PaintingsNew} />
              <Route path="/paintings/:slug" render={(props) => {
                console.log(props.match.params.slug);
                return ""
              }} />
              <Route render={props => (
                (<PaintingsContainer {...props}/>)
              )} />
            </Switch>

          </div>
        </div>
      </div>
    );
  }
}

export default App;

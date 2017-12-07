import React, { Component } from 'react';
// import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {refreshAuthToken} from '../../actions/auth';

import Dashboard from './dashboard';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <main>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/search" component={Dashboard} />
              <Route exact path="/signup" component={Dashboard} />
              <Route exact path="/login" component={Dashboard} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

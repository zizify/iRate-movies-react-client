import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {refreshAuthToken} from '../../actions/auth'

import Nav from './nav';
import Search from './search';
import Signup from './signup';
import Login from './login';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
            <main>
                <Nav />
                <Switch>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </main>
            </div>
        )
    }
}
import React from 'react';

import '../css/login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        
        const formData = {};
        for (const field in this.refs) {
          formData[field] = this.refs[field].value;
        }
        console.log('-->', formData);
      }

      render() {
        return (
            <fieldset className="login-signup-fieldset">
                <legend>Log In</legend>
                <form className="login-signup" id="signup-form">
                    <label htmlFor="username">Username: </label>
                    <input id="username" type="text" ref="username"></input>
                    <br></br>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" ref="password"></input>
                    <br></br>
                    <label htmlFor="confirm-password">Confirm Password: </label>
                    <input id="confirm-password" type="password" ref="confirm-password"></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        )
    }
}
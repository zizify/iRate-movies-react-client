import React from 'react';

import '../css/login.css';

export default function Login() {
    return (
        <fieldset className="login-signup-fieldset">
            <legend>Log In</legend>
            <form className="login-signup" id="login-form">
                <label htmlFor="username">Username: </label>
                <input id="username" type="text"></input>
                <br></br>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password"></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </fieldset>
    )
}
import React from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

import '../css/nav.css';

export default function Nav() {
    return (
        <div className="nav-bar-container">
            <h1>iRate Movies!</h1>
            <p>Rate and review your favorite movies.</p>
            <nav>
                <ul className="nav-ul">
                    <li className="nav-link"><Link to='/search'>Search</Link></li>
                    <li className="nav-link"><Link to='/signup'>Sign Up</Link></li>
                    <li className="nav-link"><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </div>
    )
}
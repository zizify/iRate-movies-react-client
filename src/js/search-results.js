import React from 'react';
import {Link} from 'react-router-dom';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{id: 1, title: 'Movie 1'}, {id: 2, title: 'Movie 2'}, {id: 3, title: 'Movie 3'}, {id: 4, title: 'Movie 4'}]
        };
    }
    
    render() {
        const movieLinks = this.state.movies.map((movie, index) => 
            <li key={index}><Link to="#">{movie.title}</Link></li>
        )

        return (
            <div className="results-list-container">
                <ul>
                    {movieLinks}
                </ul>
            </div>
        )
    }
}
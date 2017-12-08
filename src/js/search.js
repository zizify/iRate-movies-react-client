import React from 'react';
import SearchResults from './search-results';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
    render() {
        return (
            <form>
                <input id="movie-search" placeholder="Search"></input>
                <button type="submit">Submit</button>
                <div className="search-results-container">
                    <SearchResults />
                </div>
            </form>
        )
    }
}
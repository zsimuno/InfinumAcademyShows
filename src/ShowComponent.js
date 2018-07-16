import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class ShowComponent extends Component {
    render() {
        const { shows, info } = this.props;
        return (
            <div>
                <h1>Shows:</h1>
                <div> 
                { // Show all shows in one place with links to their description on page
                    shows.reduce((accumulator, currentValue) => (
                        [accumulator, 
                        ' - ', 
                        <a href = {`#${currentValue._id}`} key = {`linkto${currentValue._id}`}>
                            {currentValue.title}
                        </a>]
                    ), '')
                }
                </div>
                <h1>List:</h1> 
                <ul>
                    {
                        shows.map((show) =>(
                            // Show title and link to episodes
                        <li key = {show._id} id = {show._id}>
                            <h3>{show.title}</h3>    
                            (<Link to = {`/episodes/${show._id}`}>Episodes</Link>)

                            <ul>
                                {/* Show info about shows if it exists */}
                                <li key={show.title}>
                                    {
                                    info[show._id] === "" ?
                                        <p>No description available</p>
                                        :
                                        info[show._id]
                                    }
                                </li>
                            </ul>
                        </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

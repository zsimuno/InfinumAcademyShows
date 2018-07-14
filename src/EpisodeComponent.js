import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class EpisodeComponent extends Component {
    render(){
        const { episodes } = this.props;
        return(
            <div>
            <h1><Link to = '/'>Home</Link></h1>
            {episodes.length === 0 ?
            <h2>No episodes available</h2>
            :
            <ul>
            <h2>Episodes: </h2>
            {
                episodes.map((episode) => (
                    <li key={episode._id}>
                        <h3>{episode.title}</h3>

                        <ul>
                            <li key={episode.title}>
                            { // Check if there is a description
                                episode.description.length === 0 ?
                                <p>No description available</p>
                                :
                                episode.description
                            }
                            </li>
                        </ul>
                    </li>
                ))
            }
            </ul>
            }
            </div>
        )
    }
}

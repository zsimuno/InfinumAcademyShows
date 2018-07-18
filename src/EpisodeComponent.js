import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class EpisodeComponent extends Component {
    render() {
        const { episodes, errorMessage } = this.props;
        return (
            <div>
                <h1><Link to='/'>Home</Link></h1>
                {errorMessage !== null ?
                    <h2>{errorMessage}</h2>
                    :
                    episodes.length === 0 ?
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
                                                {
                                                    episode.description.length === 0 ?
                                                        <p>No description available</p>
                                                        :
                                                        <p>{episode.description}</p>
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

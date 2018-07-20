import React, { Component } from 'react';


export class ShowDetailsComponent extends Component {
    render() {
        const { episodes, errorMessage, showInfo } = this.props;
        return (
            <div>
                {
                    errorMessage !== null ?
                        <h2>{errorMessage}</h2>
                        :
                        <div>
                            <h1>{showInfo.title}</h1>
                            <h3>Description:</h3>
                            {
                                showInfo.description === "" ?
                                    <p>No description available</p>
                                    :
                                    <p>{showInfo.description}</p>
                            }
                            {
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
                }
            </div>



        )
    }

}


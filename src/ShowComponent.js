import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class ShowComponent extends Component {
    render() {
        const { shows, info } = this.props;
        return (
            <div>
                <h1>Shows:</h1>
                {/* {
                    shows.reduce((accumulator, currentValue) => (
                        `${accumulator}- <a href = #${currentValue._id}>${currentValue.title}</a> -`
                    ), '')
                } */}
                <h1>List:</h1> 
                <ul>
                    {
                        shows.map((show) =>(
                        <li key = {show._id} id = {show._id}>
                            <Link to = {`/episodes/${show._id}`}>{show.title}</Link>

                            <ul>
                                {/* Show info about shows */}
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

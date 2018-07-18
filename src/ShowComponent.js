import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class ShowComponent extends Component {
    render() {
        const { shows, descriptions } = this.props;
        return (
            <div>
                <h1>Shows:</h1>
                <div>
                    { 
                        shows.reduce((accumulator, currentValue) => (
                            [accumulator,
                                ' - ',
                                <a href={`#${currentValue._id}`} key={`linkto${currentValue._id}`} >
                                    {currentValue.title}
                                </a>]
                        ), '')
                    }
                </div>
                <h1>List:</h1>
                <ul>
                    {
                        shows.map((show) => (
                            <li key={show._id} id={show._id}>
                                <h3>{show.title}</h3>
                                (<Link to={`/episodes/${show._id}`}>Episodes</Link>)

                            <ul>
                                    <li key={show.title}>
                                        {
                                            descriptions[show._id] === "" ?
                                                <p>No description available</p>
                                                :
                                                <p>{descriptions[show._id]}</p>
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

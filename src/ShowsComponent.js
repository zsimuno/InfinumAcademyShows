import React, { Component } from 'react';

import { css } from 'emotion';
import { image } from './style';
import { Link } from 'react-router-dom';

const container = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px 20px;
`;

const link = css`
    grid-template-rows: 1fr 1fr;
    color: grey;
    text-decoration: none;
`;

export class ShowsComponent extends Component {
    render() {
        const { shows } = this.props;
        return (
            <div>
                <h3>All shows:</h3>
                <div className={container}>
                    {
                        shows.map((show) => (
                            <div key={show._id}>
                                <Link to={`/show/${show._id}`} className={link}>
                                    <img className={image} src={`./images/shows/${show._id}.jpg`} alt={show.title} />
                                    <div>{show.title}</div>
                                </Link>

                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

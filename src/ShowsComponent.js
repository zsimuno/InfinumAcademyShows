import React, { Component } from 'react';

import { css } from 'emotion';
import { Link } from 'react-router-dom';

const container = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 40px 20px;
`;

const image = css`
    width: 100px;
    height: 125px;
`;

const link = css`
    grid-template-rows: 1fr 1fr;
    color: grey;
    text-decoration: none;
`;

const images = require.context('./images/shows/', true);

export class ShowsComponent extends Component {
    render() {
        const { shows } = this.props;
        return (
            <div>
                <h3>All shows:</h3>
                <div className={container}>
                    {
                        shows.map((show) => {
                            const imageLink = images(`./${show._id}.jpg`);
                            return (
                                <div key={show._id}>
                                    <Link to={`/show/${show._id}`} className={link}>
                                        <img className={image} src={imageLink} alt={show.title} />
                                        <div>{show.title}</div>
                                    </Link>

                                </div>
                            );
                        }
                        )
                    }
                </div>
            </div>
        )
    }
}

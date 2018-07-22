import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';

import { css } from 'emotion';
import { Link } from 'react-router-dom';

const container = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-gap: 40px 20px;
`;

const image = css`
    width: 150px;
    height: 225px;
`;

const link = css`
    color: grey;
    text-decoration: none;
`;

@observer
export class ShowsComponent extends Component {
    render() {
        const { shows } = this.props;
        return (
            <div>
                <HeaderComponent />
                <h3>All shows:</h3>
                <div className={container}>
                    {
                        shows.map((show) => (
                            <div key={show._id} >
                                <Link to={`/show/${show._id}`} className={link}>
                                    <img
                                        className={image}
                                        src={`/images/shows/${show._id}.jpg`}
                                        alt={show.title}
                                    />
                                    <div>{show.title}</div>
                                </Link>

                            </div>
                        )

                        )
                    }
                </div>
                <FooterComponent />
            </div>
        )
    }
}

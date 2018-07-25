import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterComponent } from './FooterComponent';

import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { fadeInImage } from '../style';

const container = css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-gap: 40px 20px;
`;



const image = css`
    width: 200px;
    height: 300px;
`;

const link = css`
    text-decoration: none;
`;
const imageLink = css`
    animation: ${fadeInImage} 1s ease;
    color: grey;
    transition: transform .2s ease;
    &:hover {
        transform: scale(1.1);
    }
`;

@observer
export class ShowsComponent extends Component {
    render() {
        const { shows } = this.props;
        return (
            <div>
                <HeaderContainer />
                <h3>All shows:</h3>
                <div className={container}>
                    {
                        shows.map((show) => (
                            <div key={show._id} >
                                <Link to={`/show/${show._id}/`} className={link}>
                                <div className={imageLink}>
                                    <img
                                        className={image}
                                        src={`/images/shows/${show._id}.jpg`}
                                        alt={show.title}
                                    />
                                    <div>{show.title}</div>
                                </div>
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

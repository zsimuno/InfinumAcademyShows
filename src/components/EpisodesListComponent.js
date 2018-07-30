import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText, fadeInAnimation } from '../style.js';
import { LineComponent } from './LineComponent';
import { Link } from 'react-router-dom';
import placeholderImage from '../images/placeholder.png';

const episodeTitle = css`
    margin-left: 5px;    
`;

const episodeContainer = css`
    display: flex;
    text-decoration: none;
    margin-top: 20px;
    padding: 10px;
    color: #505050;
    transition: background 0.2s linear;
    &:hover{
        background: #F8F8F8;
        & .${episodeTitle}{
            transition: color 0.1s linear;
            color: #FF7CAA;
        }
    }
`;

const image = css`
    width: 170px;
    height: 120px;
    margin-right: 20px;
`;


@observer
export class EpisodesListComponent extends Component {
    render() {
        const { episodes, showId, loadingDone } = this.props;
        return (
            <div className={fadeInAnimation(1)}>
                <div className={pinkText}>SEASONS AND EPISODES:</div>
                <LineComponent />
                {episodes.length === 0 && loadingDone ?
                    <h2>No episodes available</h2>
                    :
                    episodes.map((episode) => (
                        <Link
                            to={`/${showId}/episode/${episode._id}`}
                            key={episode._id}
                            className={episodeContainer}
                        >
                            <img
                                className={image}
                                src={episode.imageUrl ? 
                                    `https://api.infinum.academy${episode.imageUrl}` 
                                    :  
                                    placeholderImage}
                                alt={episode.title}
                            />

                            <div>

                                <div>
                                    <span className={pinkText}>
                                        S{episode.season} Ep{episode.episodeNumber}
                                    </span>
                                    <span className={episodeTitle}>
                                        {episode.title}
                                    </span>
                                </div>

                                <div key={episode.title}>
                                    {
                                        episode.description.length === 0 ?
                                            <p>No description available</p>
                                            :
                                            <p>{episode.description}</p>
                                    }
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        );
    }
}

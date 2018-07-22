import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText } from '../style.js';
import { LineComponent } from './LineComponent';

const episodeTitle = css``;

const episodeContainer = css`
    display: block;
    &:hover{
        background: #F8F8F8;
        & .${episodeTitle}{
            ${pinkText}
        }
    }
`;

@observer
export class AllEpisodesComponent extends Component{
    render() {
        const { episodes } = this.props;
        return (
            episodes.length === 0 ?
                <h2>No episodes available</h2>
                :
                <div>
                    <div className={pinkText}>SEASONS AND EPISODES:</div>
                    <LineComponent />
                    {
                        episodes.map((episode) => (
                            <div key={episode._id}  className={episodeContainer}>
                                <div>
                                    <span className={pinkText}> S{episode.season} Ep{episode.episodeNumber} </span>
                                    <span className={episodeTitle}>{episode.title}</span>
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
                        ))
                    }
                </div>
        );
    }
}

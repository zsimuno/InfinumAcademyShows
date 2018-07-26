import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterComponent } from './FooterComponent';
import { LineComponent } from './LineComponent';
import { EpisodesListComponent } from './EpisodesListComponent';
import { LeftArrowComponent } from './LeftArrowComponent';
import { LikeDislikeComponent } from './LikeDislikeComponent'

import { css, cx } from 'emotion';
import { pinkText, emulateButton, fadeInAnimation } from '../style.js';
;

const container = css`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    width: 90%;
    margin: 0 auto;
`;


const image = css`
    display: block;
    width: 100%;
    height: auto;
    align-self: center;
`;

const showTitle = css`
    display: inline; 
    padding-right: 20px;
`;

const titleAndLikesCount = css`
    display: flex; 
    align-self: center;
`;

const rightColumn = css`
    display: flex; 
    flex-direction: column;
`;



@observer
export class ShowDetailsComponent extends Component {
    render() {
        const { episodes, errorMessage, showInfo, onLikeClick, onDislikeClick, isUserLoggedIn } = this.props;
        return (
            <div>
                <HeaderContainer />
                <LeftArrowComponent
                    linkTo='/'
                    sideTextBox='Back To home'
                />
                {
                    errorMessage !== null ?
                        <h2>{errorMessage}</h2>
                        :
                        <div className={container} >
                            <div>
                                <div className={titleAndLikesCount}>
                                    <h1 className={showTitle}>
                                        {showInfo.title}
                                    </h1>
                                    <LikeDislikeComponent
                                        object={showInfo}
                                        onLikeClick={onLikeClick}
                                        onDislikeClick={onDislikeClick}
                                        isUserLoggedIn={isUserLoggedIn}
                                    />
                                </div>

                                <div>
                                    {
                                        showInfo.description === "" ?
                                            <p>No description available</p>
                                            :
                                            <p>{showInfo.description}</p>
                                    }
                                </div>

                                <div>
                                    <EpisodesListComponent episodes={episodes} showId={showInfo._id} />
                                </div>
                            </div>

                            <div className={rightColumn}>
                                <div>
                                    <Link to={`/show/${showInfo._id}/addEpisode`}>
                                        <span className={emulateButton}><b>+</b> Add Episode</span>
                                    </Link>
                                    <span className={emulateButton}>&hearts; Favorite</span>
                                </div>

                                <img
                                    className={cx(fadeInAnimation(0.6), image)}
                                    src={`/images/shows/${showInfo._id}.jpg`}
                                    alt={showInfo.title}
                                />

                                <div className={pinkText} >
                                    <LineComponent /> <br />
                                    Official Website <br />
                                    Wikipedia <br />
                                    IMBD <br />
                                </div>
                            </div>

                        </div>
                }
                <FooterComponent />
            </div>



        )
    }

}


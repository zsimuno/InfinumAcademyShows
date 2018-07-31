import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { LineComponent } from './LineComponent';
import { EpisodesListComponent } from './EpisodesListComponent';
import { LeftArrowComponent } from './LeftArrowComponent';
import { LikeDislikeComponent } from './LikeDislikeComponent'

import { css, cx } from 'emotion';
import { pinkText, fadeInAnimation, loadingAnimation, emulateButtonIfLogged, greyText } from '../style.js';

import placeholderImage from '../images/placeholder.png';

const container = css`
    display: grid;
    position: relative;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    width: 90%;
    margin: 0 auto;
`;

const bodyContainer = css`
    position: relative;
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

const loginToUseFeatures = css`
    align-self: center;
`;


@observer
export class ShowDetailsComponent extends Component {
    render() {
        const {
            episodes,
            errorMessage,
            showInfo,
            onLikeClick,
            onDislikeClick,
            isUserLoggedIn,
            loadingDone,
            toggleFavoriteShow,
            isShowFavorite,
        } = this.props;
        return (
            <div className={bodyContainer}>
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
                                    {
                                        !isUserLoggedIn &&
                                        <i className={cx(loginToUseFeatures, greyText)}>
                                            (Log in to Like, Dislike, Add Episodes and Favorite)
                                        </i>
                                    }
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
                                    {!loadingDone ?
                                        <div className={loadingAnimation}></div>
                                        :
                                        <EpisodesListComponent
                                            episodes={episodes}
                                            showId={showInfo._id}
                                            loadingDone={loadingDone}
                                        />}
                                </div>
                            </div>

                            <div className={rightColumn}>
                                <div>
                                    <Link
                                        to={`/show/${showInfo._id}/addEpisode`}
                                        className={emulateButtonIfLogged(isUserLoggedIn)}
                                    >
                                        <b>+</b> Add Episode
                                    </Link>
                                    <span
                                        className={emulateButtonIfLogged(isUserLoggedIn)}
                                        onClick={toggleFavoriteShow}
                                    >
                                        {isShowFavorite ?
                                            <div><del>&hearts;</del> Unfavorite</div>
                                            :
                                            <div>&hearts; Favorite</div>
                                        }
                                    </span>
                                </div>


                                <img
                                    className={cx(fadeInAnimation(0.6), image)}
                                    src={showInfo.imageUrl ?
                                        `https://api.infinum.academy${showInfo.imageUrl}`
                                        :
                                        placeholderImage}
                                    alt={showInfo.title}
                                />

                                <div className={pinkText} >
                                    <LineComponent />
                                    <div> Official Website </div>
                                    <div> Wikipedia </div>
                                    <div> IMBD </div>
                                </div>
                            </div>

                        </div>
                }
            </div>



        );
    }

}


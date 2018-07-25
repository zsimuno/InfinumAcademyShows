import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { LineComponent } from './LineComponent';
import { EpisodesListComponent } from './EpisodesListComponent';

import { css } from 'emotion';
import { pinkText, emulateButton } from '../style.js';
import { LeftArrowComponent } from './LeftArrowComponent';
import { LikeDislikeComponent } from './LikeDislikeComponent';

const container = css`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    width: 90%;
    margin: 0 auto;
`;


const image = css`
    max-width:100%;
`;

const showTitle = css`
    display: inline; 
    padding-right: 20px;
`;



@observer
export class ShowDetailsComponent extends Component {
    render() {
        const { episodes, errorMessage, showInfo, onLikeClick, onDislikeClick } = this.props;
        return (
            <div>
                <HeaderComponent />
                <LeftArrowComponent linkTo='/' />
                {
                    errorMessage !== null ?
                        <h2>{errorMessage}</h2>
                        :
                        <div className={container} >
                            <div>
                                <div className={css`display: flex; align-self: center;`}>
                                    <h1 className={showTitle}>
                                        {showInfo.title}
                                    </h1>
                                    <LikeDislikeComponent
                                        object={showInfo}
                                        onLikeClick={onLikeClick}
                                        onDislikeClick={onDislikeClick}
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

                            <div>
                                <div className={css`align-self: end;`}>
                                    <span className={emulateButton}>Add Episode</span>
                                    <span className={emulateButton}>Favorite</span>
                                </div>

                                <div>
                                    <img
                                        className={image}
                                        src={`/images/shows/${showInfo._id}.jpg`}
                                        alt={showInfo.title}
                                    />
                                </div>

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


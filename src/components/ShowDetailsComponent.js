import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { LineComponent } from './LineComponent';
import { AllEpisodesComponent } from './AllEpisodesComponent';


import { css } from 'emotion';
import { pinkText, emulateButton } from '../style.js';
import { plusImage } from '../images/ic-add@3x.png';


const container = css`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    width: 90%;
    margin: 0 auto;
`;

const leftGrid = css`
    display: grid;
    grid-template-rows: 1fr 1fr 4fr;
`;

const rightGrid = css`
    display: grid;
    grid-template-rows: 1fr 2 fr 1fr;
`;

const image = css`
    max-width:100%;
`;

const showTitle = css`
    display: inline; 
    padding-right: 20px;
`;

const leftArrow = css`
    border: solid #FF7CAA;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    margin: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;



@observer
export class ShowDetailsComponent extends Component {
    render() {
        const { episodes, errorMessage, showInfo } = this.props;
        return (
            <div>
                <HeaderComponent />
                <Link to='/' className={emulateButton}>
                    <span className={leftArrow}></span>
                </Link>

                {
                    errorMessage !== null ?
                        <h2>{errorMessage}</h2>
                        :
                        <div className={container} >
                            <div className={leftGrid}>
                                <div className={css`align-self: center;`}>
                                    <h1
                                        className={showTitle}
                                    >
                                        {showInfo.title}
                                    </h1>
                                    {
                                        showInfo.likesCount !== undefined &&
                                        <i>(Likes Count: {showInfo.likesCount})</i>
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
                                    <AllEpisodesComponent episodes={episodes} />
                                </div>
                            </div>

                            <div className={rightGrid}>
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
                                    <br />
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


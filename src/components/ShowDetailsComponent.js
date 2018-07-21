import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { LineComponent } from '../components/LineComponent';


import { css } from 'emotion';
import { pinkText } from '../style.js';


const container = css`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 20px;
    width: 80%;
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


@observer
export class ShowDetailsComponent extends Component {
    render() {
        const { episodes, errorMessage, showInfo } = this.props;
        return (
            <div>
                <HeaderComponent />
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
                                    {
                                        episodes.length === 0 ?
                                            <h2>No episodes available</h2>
                                            :
                                            <div>
                                                <div className={pinkText}>SEASONS AND EPISODES:</div>
                                                <LineComponent />
                                                {
                                                    episodes.map((episode) => (
                                                        <div key={episode._id}>
                                                            <h3>{episode.title}</h3>
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
                                    }
                                </div>
                            </div>

                            <div className={rightGrid}>
                                <div></div>

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


import React, { Component } from 'react';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { LineComponent } from '../components/LineComponent';

import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText } from '../style.js';


const container = css`
    display: grid;
    grid-template-rows: 1fr 1fr 4fr;
    grid-template-columns: 3fr 2fr;
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
                            <div>
                                <h1>{showInfo.title}</h1>
                            </div>
                            <div></div>

                            <div>
                                {
                                    showInfo.description === "" ?
                                        <p>No description available</p>
                                        :
                                        <p>{showInfo.description}</p>
                                }
                            </div>
                            <div></div>

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
                            <div></div>
                        </div>
                }
                <FooterComponent />
            </div>



        )
    }

}


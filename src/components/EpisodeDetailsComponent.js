import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText, greyText, image } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LineComponent } from './LineComponent';

import placeholderImage from '../images/img-placeholder-user3.png';


const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const comments = css`
    display: flex;
    flex-wrap: wrap;
`;

@observer
export class EpisodeDetailsComponent extends Component {

    _sendComment(){
        
    }

    render() {
        const { episodeInformation, episodeComments } = this.props;
        return (
            <div className={container}>

                <img />
                
                <div>
                    <h2>{episodeInformation.title}</h2>
                    <p>{episodeInformation.description}</p>
                </div>

                <div> 
                    <span className={pinkText}>COMMENTS</span>
                    <span className={greyText}>({episodeComments.length})</span> 
                </div>

                <div>
                    <input type="text" />
                    <ButtonComponent text="COMMENT" onClick={this._sendComment} justify="end" />
                </div>

                <div>
                    {
                        episodeComments.length === 0 ?
                        <div>No comments yet</div>
                        :
                        episodeComments.map((comment) => {
                            <div className={comments}>
                                <img src={placeholderImage} className={image} />
                                {comment.text}
                                <LineComponent />
                            </div>
                        })
                    }
                </div>
                
            </div>
        );
    }
}
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { css } from 'emotion';
import { pinkText, greyText, image } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LineComponent } from './LineComponent';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { LeftArrowComponent } from './LeftArrowComponent';

import placeholderImage from '../images/img-placeholder-user3.png';



const container = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const comments = css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const userImage = css`
    ${image}
    margin-right: 10px;
`;

const commentInput = css`
    width: 100%;
    height: 100px;
    resize: none;
    margin: 20px;
`;

const commentTextContainer = css`
    display: flex;
    flex-direction: column;
`;


@observer
export class EpisodeDetailsComponent extends Component {

    @observable
    componentState = {
        commentText: '',
    }

    @action.bound
    _sendComment(){
        
    }

    @action.bound
    _handleCommentChange(event){
        this.componentState = event.target.value;
    }

    render() {
        const { episodeInformation, episodeComments } = this.props;
        return (
            <div>
            <HeaderComponent />
            <LeftArrowComponent linkTo='../' bottomAndRightMargin='-20px' />
            <div className={container}>

                {/* <img /> */}
                
                <div>
                    <h2>{episodeInformation.title}</h2>
                    <p>{episodeInformation.description}</p>
                </div>

                <div> 
                    <span className={pinkText}>COMMENTS</span>
                    <span className={greyText}>({episodeComments.length})</span> 
                </div>

                <div className={commentTextContainer}>
                    <textarea 
                    className={commentInput} 
                    placeholder="Post a comment..."  
                    value={this.componentState.commentText} 
                    onChange={this._handleCommentChange}
                    />
                    <ButtonComponent text="COMMENT" onClick={this._sendComment} align="flex-end" />
                </div>

                <div>
                    {
                        episodeComments.length === 0 ?
                        <div>No comments yet</div>
                        :
                        episodeComments.map((comment, index) => 
                        <div key={comment._id}>
                            <div className={comments} >
                                <img src={placeholderImage} className={userImage} alt="User"/>
                                {comment.text}
                                
                            </div>
                            {index !== episodeComments.length - 1 && <LineComponent /> }
                        </div>
                        )
                    }
                </div>
                
            </div>
            <FooterComponent />
            </div>
        );
    }
}
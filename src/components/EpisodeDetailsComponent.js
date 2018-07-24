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
    align-items: center;
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
    margin: 20px 0px 20px 0px;
`;

const commentTextContainer = css`
    display: flex;
    flex-direction: column;
`;

const usernameAndComment = css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
`;

const underImage = css`
    display: flex;
    flex-direction: column;
    width: 60%;
    `;

@observer
export class EpisodeDetailsComponent extends Component {

    @observable
    componentState = {
        commentText: '',
    }

    @action.bound
    _sendComment() {

    }

    @action.bound
    _handleCommentChange(event) {
        this.componentState = event.target.value;
    }

    render() {
        const { episodeInformation, episodeComments } = this.props;
        return (
            <div>
                <HeaderComponent />
                <LeftArrowComponent
                    linkTo='../'
                    bottomAndRightMargin='-200px'
                    sideTextBox='Back To TV Show'
                />
                <div className={container}>

                    <img
                        className={image}
                        src={`/images/placeholder.png`}
                        alt={episodeInformation.title}
                    />

                    <div className={underImage}>
                        <h2>{episodeInformation.title}</h2>
                        <p>{episodeInformation.description}</p>

                        <span className={pinkText}>COMMENTS</span>
                        <span className={greyText}>({episodeComments.length})</span>

                        <div className={commentTextContainer}>
                            <textarea
                                className={commentInput}
                                placeholder="Post a comment..."
                                value={this.componentState.commentText}
                                onChange={this._handleCommentChange}
                            />
                            <ButtonComponent
                                text="COMMENT"
                                onClick={this._sendComment}
                                align="flex-end"
                            />
                        </div>

                        {
                            episodeComments.length === 0 ?
                                <div>No comments yet</div>
                                :
                                episodeComments.map((comment, index) =>
                                    <div key={comment._id}>
                                        <div className={comments} >
                                            <img
                                                src={placeholderImage}
                                                className={userImage}
                                                alt="User"
                                            />
                                            <div className={usernameAndComment}>
                                                <div className={pinkText}>
                                                    {comment.userEmail ? 
                                                     comment.userEmail.split('@')[0]
                                                     :
                                                     'anonymous'}
                                                </div>
                                                <div>{comment.text}</div>
                                            </div>


                                        </div>
                                        {index !== episodeComments.length - 1 && <LineComponent />}
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
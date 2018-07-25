import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText, greyText, image, customTextArea } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LineComponent } from './LineComponent';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { LeftArrowComponent } from './LeftArrowComponent';
import { LikeDislikeComponent } from './LikeDislikeComponent';

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
    ${customTextArea}
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
    width: 70%;
    `;

@observer
export class EpisodeDetailsComponent extends Component {
    render() {
        const { episodeInformation, episodeComments, commentText, sendComment, onTextAreaChange } = this.props;
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

                    <LikeDislikeComponent object={episodeInformation} marginTop='-50px' />

                    <div className={underImage}>
                        <h2>{episodeInformation.title}</h2>
                        <p>{episodeInformation.description}</p>

                        <p className={pinkText}>
                            COMMENTS &nbsp;
                            <span className={greyText}>
                                ({episodeComments.length})
                            </span>
                        </p>


                        <div className={commentTextContainer}>
                            <textarea
                                className={commentInput}
                                placeholder="Post a comment..."
                                value={commentText}
                                onChange={onTextAreaChange}
                                disabled={!localStorage.getItem('user')}
                            />
                            <ButtonComponent
                                text="COMMENT"
                                onClick={sendComment}
                                align="flex-end"
                                disabled={!localStorage.getItem('user')}
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
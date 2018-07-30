import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, greyText, image, customTextArea, loadingAnimation, displayFlexColumn, emulateButtonIfLogged } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LineComponent } from './LineComponent';
import { LeftArrowComponent } from './LeftArrowComponent';

import placeholderUserImage from '../images/img-placeholder-user3.png';
import placeholderImage from '../images/placeholder.png';


const container = css`
    align-items: center;
`;

const comments = css`
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const userImageMargin = css`
    margin-right: 10px;
`;

const commentInput = css`
    width: 100%;
    height: 100px;
    resize: none;
    margin: 20px 0px 20px 0px;
`;

const usernameAndComment = css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    margin-right: auto;
`;

const underImage = css`
    width: 70%;
    `;

const deleteButton = css`
    justify-self: end;
`;

@observer
export class EpisodeDetailsComponent extends Component {
    render() {
        const {
            episodeInformation,
            episodeComments,
            commentText,
            sendComment,
            onInputChange,
            username,
            loadingDone,
            deleteComment,
        } = this.props;
        const isUserLoggedIn = username;

        return (
            <div>
                <LeftArrowComponent
                    linkTo={`/show/${episodeInformation.showId}`}
                    bottomAndRightMargin='-200px'
                    sideTextBox='Back To TV Show'
                />
                <div className={cx(container, displayFlexColumn)}>

                    <img
                        className={image}
                        src={episodeInformation.imageUrl ?
                            `https://api.infinum.academy${episodeInformation.imageUrl}`
                            :
                            placeholderImage}
                        alt={episodeInformation.title}
                    />

                    <div className={cx(underImage, displayFlexColumn)}>
                        <h2>{episodeInformation.title}</h2>
                        <p>{episodeInformation.description}</p>

                        <p className={pinkText}>
                            COMMENTS &nbsp;
                            <span className={greyText}>
                                ({episodeComments.length})
                            </span>
                        </p>


                        <form className={displayFlexColumn} onSubmit={sendComment}>
                            <textarea
                                className={cx(commentInput, customTextArea)}
                                placeholder="Post a comment..."
                                value={commentText}
                                onChange={onInputChange('commentText')}
                                disabled={!isUserLoggedIn}
                            />
                            <ButtonComponent
                                text="COMMENT"
                                type="submit"
                                alignSelf="flex-end"
                                disabled={!isUserLoggedIn || !commentText}
                            />
                        </form>
                        {!loadingDone ?
                            <div className={loadingAnimation}></div>
                            :
                            episodeComments.length === 0 ?
                                <div>No comments yet</div>
                                :
                                episodeComments.map((comment, index) =>
                                    <div key={comment._id}>
                                        <div className={comments} >
                                            <img
                                                src={placeholderUserImage}
                                                className={cx(userImageMargin, image)}
                                                alt="User"
                                            />
                                            <div className={usernameAndComment}>
                                                <div className={pinkText}>
                                                    {comment.userEmail ?
                                                        comment.userEmail
                                                        :
                                                        'anonymous'}
                                                </div>
                                                <div>{comment.text}</div>
                                            </div>
                                            
                                            { username === comment.userEmail &&
                                            <div 
                                            className={
                                                cx(deleteButton, emulateButtonIfLogged(isUserLoggedIn, '#D32F2F'))
                                            }
                                            onClick={deleteComment(comment._id)}
                                            >
                                                Delete
                                            </div> }


                                        </div>
                                        {index !== episodeComments.length - 1 && <LineComponent />}
                                    </div>
                                )
                        }
                    </div>
                </div>

            </div>
        );
    }
}
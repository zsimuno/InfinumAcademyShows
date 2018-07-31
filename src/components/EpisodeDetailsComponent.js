import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, greyText, image, customTextArea, loadingAnimation, displayFlexColumn } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LeftArrowComponent } from './LeftArrowComponent';

import placeholderImage from '../images/placeholder.png';
import { CommentsComponent } from './CommentsComponent';


const container = css`
    align-items: center;
`;


const commentInput = css`
    width: 100%;
    height: 100px;
    resize: none;
    margin: 20px 0px 20px 0px;
`;

const underImage = css`
    width: 70%;
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
                                placeholder={isUserLoggedIn ?
                                    "Post a comment..."
                                    :
                                    "You must be logged in to comment."}
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
                            <CommentsComponent
                                episodeComments={episodeComments}
                                username={username}
                                deleteComment={deleteComment}
                            />
                        }
                    </div>
                </div>

            </div>
        );
    }
}
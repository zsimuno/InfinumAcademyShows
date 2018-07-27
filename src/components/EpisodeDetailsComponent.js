import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, greyText, image, customTextArea, fadeInAnimation } from '../style';

import { ButtonComponent } from './ButtonComponent';
import { LineComponent } from './LineComponent';
import { HeaderContainer } from '../containers/HeaderContainer';
import { FooterComponent } from './FooterComponent';
import { LeftArrowComponent } from './LeftArrowComponent';

import placeholderUserImage from '../images/img-placeholder-user3.png';
import placeholderImage from '../images/placeholder.png';




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

const userImageMargin = css`
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
            onTextAreaChange,
            userLoggedIn,
        } = this.props;

        return (
            <div>
                <HeaderContainer />
                <LeftArrowComponent
                    linkTo={`/show/${episodeInformation.showId}`}
                    bottomAndRightMargin='-200px'
                    sideTextBox='Back To TV Show'
                />
                <div className={container}>

                    <img
                        className={cx(image, fadeInAnimation(0.6))}
                        src={episodeInformation.imageUrl || placeholderImage}
                        alt={episodeInformation.title}
                    />

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
                                className={cx(commentInput, customTextArea) }
                                placeholder="Post a comment..."
                                value={commentText}
                                onChange={onTextAreaChange}
                                disabled={!(userLoggedIn)}
                            />
                            <ButtonComponent
                                text="COMMENT"
                                onClick={sendComment}
                                alignSelf="flex-end"
                                disabled={!(userLoggedIn)}
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
                                                src={placeholderUserImage}
                                                className={cx(userImageMargin, image)}
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
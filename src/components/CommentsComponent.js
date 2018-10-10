import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, image, emulateButtonIfLogged } from '../style';

import { LineComponent } from './LineComponent';

import placeholderUserImage from '../images/img-placeholder-user3.png';

const comments = css`
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
`;

const userImageMargin = css`
    margin-right: 10px;
`;

const usernameAndComment = css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    margin-right: auto;
`;

const deleteButton = css`
    justify-self: end;
`;

@observer
export class CommentsComponent extends Component {
    render() {
        const {
            episodeComments,
            username,
            deleteComment,
        } = this.props;
        const isUserLoggedIn = username;

        return (
            episodeComments.length === 0 ?
                <div>No comments yet</div>
                :
                episodeComments.map((comment, index) =>
                    <div key={comment._id}>
                        <div className={comments} >
                            <img
                                src={placeholderUserImage}
                                className={cx(userImageMargin, image)}
                                alt="UserProfileImage"
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

                            {username === comment.userEmail &&
                                <div
                                    className={
                                        cx(deleteButton, emulateButtonIfLogged(isUserLoggedIn, '#D32F2F'))
                                    }
                                    onClick={deleteComment(comment._id)}
                                >
                                    Delete
                                        </div>}


                        </div>
                        {index !== episodeComments.length - 1 && <LineComponent />}
                    </div>
                )
        );
    }
}
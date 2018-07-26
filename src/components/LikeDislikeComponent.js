import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { pinkText, emulateButton } from '../style.js';

const linkesCount = css`
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    ${pinkText}
    margin: 5px;
    padding: 5px;
`;

@observer
export class LikeDislikeComponent extends Component {
    render() {
        const { onLikeClick, onDislikeClick, marginTop, object, isUserLoggedIn } = this.props;
        const container = css`
            display: flex;
            align-self: center;
            ${ marginTop && `margin-top: ${marginTop};`}   
        `;
        return (
            object.likesCount !== undefined &&
            <div className={container}>
                {
                    isUserLoggedIn &&
                    <div
                        className={emulateButton}
                        onClick={onLikeClick}
                    >
                        LIKE
                </div>}
                <div className={linkesCount}>Score: {object.likesCount}</div>
                {
                    isUserLoggedIn &&
                    <div
                        className={emulateButton}
                        onClick={onDislikeClick}
                    >
                        DISLIKE
                </div>
                }
            </div>
        );
    }
}

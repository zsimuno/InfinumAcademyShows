import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, emulateButton } from '../style.js';

const likesCount = css`
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    margin: 5px;
    padding: 5px;
`;

const container = css`
    display: flex;
    align-self: center;
`;

const marginOnTop = (marginTop) => css`
    ${ marginTop && `margin-top: ${marginTop};`} 
`;

@observer
export class LikeDislikeComponent extends Component {
    render() {
        const { onLikeClick, onDislikeClick, marginTop, object, isUserLoggedIn } = this.props;
        return (
            object.likesCount !== undefined &&
            <div className={cx(marginOnTop(marginTop), container)}>
                {
                    isUserLoggedIn &&
                    <div
                        className={emulateButton}
                        onClick={onLikeClick}
                    >
                        LIKE
                </div>}
                <div className={cx(likesCount, pinkText)}>
                    Score: {object.likesCount}
                </div>
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

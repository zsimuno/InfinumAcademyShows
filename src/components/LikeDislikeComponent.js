import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { pinkText, emulateButtonIfLogged } from '../style.js';

const likesCount = css`
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    margin: 5px;
    padding: 5px;
`;

const arrow = css`
    border: solid;
    border-width: 0 6px 6px 0;
    display: inline-block;
    padding: 6px;
    margin: 5px;
`;

const upArrow = css`
    border-color: #388E3C;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
`;

const downArrow = css`
    border-color: #D32F2F;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

`;



const container = css`
    display: flex;
    align-self: center;
    align-items: center;
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
                <div
                    className={emulateButtonIfLogged(isUserLoggedIn, '#E8F5E9')}
                    onClick={onLikeClick}
                >
                    <span className={cx(arrow, upArrow)}></span>
                </div>
                <div className={cx(likesCount, pinkText)}>
                    {object.likesCount}
                </div>
                <div
                    className={emulateButtonIfLogged(isUserLoggedIn, '#FFEBEE')}
                    onClick={onDislikeClick}
                >
                <span className={cx(arrow, downArrow)}></span>
                </div>
            </div>
        );
    }
}

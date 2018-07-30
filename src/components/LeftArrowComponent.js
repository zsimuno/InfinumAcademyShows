import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';
import { Link } from 'react-router-dom';

const leftArrow = css`
    display: inline-block;
    width: 2em;
    height: 2em;
    border: 0.25em solid #FF7CAA;
    border-radius: 50%;
    background: white;

    &:after {
        content: '';
        display: inline-block;
        margin-top: 0.525em;
        margin-left: 0.3em;
        width: 0.7em;
        height: 0.7em;
        border-top: 0.25em solid #FF7CAA;
        border-right: 0.25em solid #FF7CAA;
        -moz-transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    transition: background-color 0.1s ease;
    &:hover {
        background-color: #FF7CAA;
        &:after {
            border-color: white;
        }
    }

    pointer-events: auto;
`;

const textBubble = css`
    display: flex;
    align-items: center;
    align-self: center;
    background-color: #090201;
    opacity: 0.9;
    padding: 5px;
    border-radius: 5px;
    height 50%;
    color: white;
    font-size: 12px;
`;

const littleArrow = css`
    opacity: 0.;
    height: 5%;
    align-self: center;
    border: solid 5px transparent;
    border-right-color: #090201;
`;


const sideBox = css`
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
`;

const container = css`
    display: flex;
    pointer-events: none;
    &:hover {
        & .${sideBox} {
            visibility: visible;
            opacity: 0.7;
        }
    }

    
`;

const bottomRightMargin = (bottomAndRightMargin) => css`
    ${bottomAndRightMargin &&
        `
            position: relative;
            float: left;
            margin-right: ${bottomAndRightMargin};
            margin-bottom: ${bottomAndRightMargin};
            `
        }
`;


@observer
export class LeftArrowComponent extends Component {
    render() {
        const { linkTo, bottomAndRightMargin, sideTextBox } = this.props;
        
        return (
            <div className={cx(container, bottomRightMargin(bottomAndRightMargin))}>
                <Link to={linkTo} className={leftArrow}></Link>

                {sideTextBox &&
                    <div className={sideBox}>
                        <div className={littleArrow}></div>
                        <div className={textBubble}>{sideTextBox}</div>
                    </div>}
            </div>


        );
    }
}

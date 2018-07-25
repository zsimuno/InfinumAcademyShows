import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

const leftArrow = css`
    border: solid #FF7CAA;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    margin: 5px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;

const textBubble = css`
    display: flex;
    align-items: center;
    justify-content: center;        
    align-self: center;
    background-color: #090201;
    opacity: 0.5;
    padding: 5px;
    height 50%;
    color: white;
    font-size: 12px;
`;

const littleArrow = css`
    opacity: 0.5;
    height: 5%;
    align-self: center;
    border: solid 5px transparent;
    border-right-color: #090201;
`;

const leftArrowContainer = css`
    display: block;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    padding: 5px;
    border-radius: 50%;
    background-color: white;   
    pointer-events: auto;
    transition: background 0.2s ease;
    &:hover {
        background: #F8F8F8;
    }
`;

const sideBox = css`
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
`;


@observer
export class LeftArrowComponent extends Component {
    render() {
        const { linkTo, bottomAndRightMargin, sideTextBox } = this.props;
        const container = css`
            display: flex;
            pointer-events: none;
            ${bottomAndRightMargin &&
            `
                position: relative;
                float: left;
                margin-right: ${bottomAndRightMargin};
                margin-bottom: ${bottomAndRightMargin};
                `
            }
            &:hover {
                & .${sideBox} {
                    visibility: visible;
                    opacity: 0.7;
                }
            }
        `;
        return (
            <div className={container}>
                <Link to={linkTo} className={leftArrowContainer}>
                    <span className={leftArrow}></span>
                </Link>

                {sideTextBox &&
                    <div className={sideBox}>
                        <div className={littleArrow}></div>
                        <div className={textBubble}>{sideTextBox}</div>
                    </div>}
            </div>


        );
    }
}

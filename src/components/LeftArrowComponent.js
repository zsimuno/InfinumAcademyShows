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
    height: 10%;
    align-self: center;
    border: solid 5px transparent;
    border-right-color: #090201;
`;

const leftArrowContainer = css`
    display: inline-block;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    margin: 5px;
    padding: 5px;
    border-radius: 50%;
    background-color: white;   
    &:hover {
        background: #F8F8F8;
    }
`;



@observer
export class LeftArrowComponent extends Component {
    render() {
        const { linkTo, bottomAndRightMargin, sideTextBox } = this.props;
        const container = css`
            display: flex;
            ${bottomAndRightMargin &&
            `
                position: relative;
                float: left;
                margin-right: ${bottomAndRightMargin};
                margin-bottom: ${bottomAndRightMargin};
                `
            }
        `;
        return (
            <div className={container}>
                <Link to={linkTo} className={leftArrowContainer}>
                    <span className={leftArrow}></span>
                </Link>
                <div className={littleArrow}></div>
                {sideTextBox && <div className={textBubble}>{sideTextBox}</div>}
            </div>


        );
    }
}

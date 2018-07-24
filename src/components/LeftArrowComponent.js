import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { emulateButton } from '../style';
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




@observer
export class LeftArrowComponent extends Component {
    render() {
        const { linkTo, bottomAndRightMargin } = this.props;
        const leftArrowContainer = css`
            ${emulateButton} 
            border-radius: 50%;
            ${
                bottomAndRightMargin &&
                `
                margin-right: ${bottomAndRightMargin};
                margin-bottom: ${bottomAndRightMargin};
                `
            }
            
        `;
        return (
            <Link to={linkTo} className={leftArrowContainer}>
                    <span className={leftArrow}></span>
                </Link>
        );
    }
}

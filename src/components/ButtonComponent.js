import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';



@observer
export class ButtonComponent extends Component {
    render() {
        const { text, onClick, linkTo, justify, align, disabled } = this.props;
        const buttonStyle = css`
            background-color: #FF7CAA;
            color: white;
            border: none;
            align-self: ${align || 'start'};
            justify-self: ${justify || 'start'};
            padding: 10px;
            width: 150px; 
            border-radius: 8px;
            ${disabled && `opacity: 0.5;`}
        `;
        const button =
            <button
                onClick={onClick}
                className={buttonStyle}
                disabled={disabled}
            >
                {text}
            </button>
        return (
            linkTo === undefined ?
                button
                :
                <Link to={linkTo}>
                    {button}
                </Link>
        );
    }
}
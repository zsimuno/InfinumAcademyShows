import React, { Component } from 'react';
import { css, cx } from 'emotion';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';


const buttonStyle = css`
    background-color: #FF7CAA;
    color: white;
    border: none;

    padding: 10px;
    width: 150px; 
    border-radius: 8px;
`;

const buttonOptionalStyles = (justifySelf, alignSelf, disabled) => css`
    ${disabled && `opacity: 0.5;`}
    align-self: ${alignSelf || 'start'};
    justify-self: ${justifySelf || 'start'};
`;


@observer
export class ButtonComponent extends Component {
    render() {
        const { type, text, onClick, linkTo, justifySelf, alignSelf, disabled } = this.props;

        const button =
            <button
                type={type}
                onClick={onClick}
                className={cx(buttonStyle, buttonOptionalStyles(justifySelf, alignSelf, disabled))}
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
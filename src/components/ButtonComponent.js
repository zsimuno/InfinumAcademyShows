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

const buttonOptionalStyles = (align, justify, disabled) => css`
    ${disabled && `opacity: 0.5;`}
    align-self: ${align || 'start'};
    justify-self: ${justify || 'start'};
`;


@observer
export class ButtonComponent extends Component {
    render() {
        const { text, onClick, linkTo, justify, align, disabled } = this.props;

        const button =
            <button
                onClick={onClick}
                className={cx(buttonStyle, buttonOptionalStyles(justify, align, disabled))}
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
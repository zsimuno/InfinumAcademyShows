import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

export const buttonStyle = css`
    background-color: #FF7CAA;
    color: white;
    border: none;
    align-self: start;
    justify-self: start;
    padding: 10px;
    width: 150px; 
    border-radius: 8px;
`;

@observer
export class ButtonComponent extends Component {
    render() {
        const { text, onClick, linkTo } = this.props;
        return (
            linkTo === undefined ?
                <button
                    onClick={onClick}
                    className={buttonStyle}
                >
                    {text}
                </button>
                :
                <Link to={linkTo}>
                    <button
                        onClick={onClick}
                        className={buttonStyle}
                    >
                        {text}
                    </button>
                </Link>
        );
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion';
import { image } from './style';

const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 40px;
    margin-bottom: 50px;
`;

const login = css` 
    justify-self: end; 
    color: #FF7CAA;
    text-decoration: none;
    `;


export class HeaderComponent extends Component {
    render() {
        return (
            <div className={container}>
                <div>
                    <Link to='/'>
                        <img className={image} src={`/images/img-logo-horizontal@3x.png`} alt="shows" />
                    </Link>
                </div>

                <div className={login}>
                        <Link to='/login' className={login}>
                            Login
                        </Link> 
                </div>
            </div>

        )
    }
}

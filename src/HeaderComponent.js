import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { image } from './style';

const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 30px;
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
                        <img className={image} src={require('./images/img-logo-horizontal@3x.png')} alt="shows" />
                    </Link>
                </div>

                <div></div>

                <div className={login}>
                    <Link to='/login' className={login}>
                        Login
                    </Link>                     
                </div>
            </div>

        )
    }
}

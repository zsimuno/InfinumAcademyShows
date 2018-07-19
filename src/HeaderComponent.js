import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { css } from 'emotion';
import { image, buttonStyle } from './style';

import showLogo from './images/img-logo-horizontal@3x.png';

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
    constructor(args){
        super(args);

        this._logout = this._logout.bind(this);
    }

    _logout(){
        sessionStorage.clear();
    }

    render() {
        return (
            <div className={container}>
                <div>
                    <Link to='/'>
                        <img className={image} src={showLogo} alt="shows" />
                    </Link>
                </div>

                <div className={login}>
                    {
                        sessionStorage.getItem('user') ?
                        <div className={login}>
                            Hi, {sessionStorage.getItem('user')} 
                            <Link to='/'>
                                <button onClick={this._logout} className={buttonStyle}>LOGOUT</button>
                            </Link>
                        </div> 
                        :
                        <Link to='/login' className={login}>
                            Login
                        </Link> 
                    }
                </div>
            </div>

        )
    }
}

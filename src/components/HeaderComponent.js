import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { LineComponent } from './LineComponent';


import { css } from 'emotion';
import { image, emulateButton } from '../style';

import showsLogo from '../images/img-logo-horizontal@3x.png';


const container = css`
    display: flex;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 50px;
`;

const login = css` 
    justify-self: end; 
    color: #FF7CAA;
    text-decoration: none;
    `;
@observer
export class HeaderComponent extends Component {
    render() {
        const { hideLogin, hideLine, username, logout } = this.props;
        return (
            <div>
                <div className={container}>
                    <div>
                        <Link to='/'>
                            <img
                                className={image}
                                src={showsLogo}
                                alt="shows" />
                        </Link>
                    </div>

                    {
                        !hideLogin
                        &&
                        <div>
                            {username ?
                                <div className={login}>
                                    Hi, {username}
                                    <div
                                        onClick={logout}
                                        className={emulateButton}
                                    >
                                        Log out
                                    </div>
                                </div>
                                :
                                <div className={login}>
                                    <Link to='/login' className={login}>
                                        <div
                                            className={emulateButton}
                                        >
                                            Login
                                    </div>
                                    </Link>
                                </div>}
                        </div>


                    }
                </div>
                {
                    !hideLine && <LineComponent widthToEnd />
                }
            </div>

        );
    }
}

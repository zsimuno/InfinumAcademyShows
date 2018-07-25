import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { LineComponent } from './LineComponent';


import { css } from 'emotion';
import { image } from '../style';

import showsLogo from '../images/img-logo-horizontal@3x.png';
import { ButtonComponent } from './ButtonComponent';
import { action } from 'mobx';


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

    _logout(){
        localStorage.clear();
    }

    render() {
        const { hideLogin, hideLine } = this.props;
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
                        localStorage.getItem('user') ?
                        <div className={login}>
                            Hi, {localStorage.getItem('user')} 
                            <Link to='/'>
                                <ButtonComponent text='LOGOUT' onClick={this._logout} />
                            </Link>
                        </div> 
                        :
                        <div className={login}>
                            <Link to='/login' className={login}>
                                Login
                            </Link>
                        </div>
                    
                        
                    }
                </div>
                {
                    !hideLine && <LineComponent widthToEnd={true} />
                }
            </div>

        )
    }
}

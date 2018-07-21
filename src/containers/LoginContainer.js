import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { login } from '../services/user';
import state from '../state';

import { ButtonComponent } from '../components/ButtonComponent';
import { HeaderComponent } from '../components/HeaderComponent';

import { css } from 'emotion';
import { customInput, inputLabel, showHidePassword } from '../style';

import eyeImage from '../images/ic-akcije-show-password-red@3x.png';


const container = css`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 30px;
`;

const link = css` 
    color: #FF7CAA;
    text-decoration: none;
`;

@observer
export class LoginContainer extends Component {
    _login() {
        login(state, state.username, state.password)
        console.log(state.loginData);
        console.log(state);
        localStorage.setItem('token', state.loginData.token);
    }

    _handleUsernameChange(event) {
        state.username = event.target.value;
    }

    _handlePasswordChange(event) {
        state.password = event.target.value;
    }

    _showHidePassword() {
        state.isInputPassword = !state.isInputPassword;
    }


    render() {
        return (
            <div className={container}>
                <HeaderComponent hideLine={true} hideLogin={true} />

                <div >
                    <label
                        htmlFor="username"
                        className={inputLabel}
                    >
                        My username is
                    </label> <br />
                    <input
                        className={customInput}
                        type="text"
                        id="username"
                        value={state.username}
                        onChange={this._handleUsernameChange}
                    />
                </div>

                <div >
                    <label
                        htmlFor="password"
                        className={inputLabel}
                    >
                        and my password is
                        </label> <br />
                    <input
                        className={customInput}
                        type={state.isInputPassword ? "password" : "text"}
                        id="password"
                        value={state.password}
                        onChange={this._handlePasswordChange}
                    />
                    <img
                        className={showHidePassword}
                        src={eyeImage}
                        alt="S/H"
                        onClick={this._showHidePassword}
                    />
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        value="Remember me"
                    />
                    Remember me
                </div>

                <div>
                    <ButtonComponent
                        onClick={this._login}
                        text='LOGIN'
                    />
                </div>

                <div>
                    Still don't have an account? <Link to='/register' className={link}>Register</Link>
                </div>
            </div>
        )
    }
}

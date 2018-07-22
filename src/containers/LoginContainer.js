import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { login } from '../services/user';

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
    constructor(args) {
        super(args);

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
        this._showHidePassword = this._showHidePassword.bind(this);
    }

    @observable
    componentState = {
        username: '',
        password: '',
        isInputPassword: true,
        loginData: {},
    };

    _login() {
        login(this.componentState, this.componentState.username, this.componentState.password)
            .then(() => localStorage.setItem('token', this.componentState.loginData.token))
            .then(() => console.log('token:', this.componentState.loginData.token))
            .catch((err) => console.log(err));
    }

    _handleUsernameChange(event) {
        this.componentState.username = event.target.value;
    }

    _handlePasswordChange(event) {
        this.componentState.password = event.target.value;
    }

    _showHidePassword() {
        this.componentState.isInputPassword = !this.componentState.isInputPassword;
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
                        value={this.componentState.username}
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
                        type={this.componentState.isInputPassword ? "password" : "text"}
                        id="password"
                        value={this.componentState.password}
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

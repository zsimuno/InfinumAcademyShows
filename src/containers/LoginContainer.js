import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable, action, runInAction } from 'mobx';
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

@inject("state")
@observer
export class LoginContainer extends Component {

    @observable
    componentState = {
        username: '',
        password: '',
        isInputPassword: true,
        loginData: {},
        rememberMeChecked: false,
    };

    @action.bound
    _login() {
        login(this.componentState, this.componentState.username, this.componentState.password)
            .then(() => this._succesfulLogin())
            .then(() => console.log('token:', this.componentState.loginData.token))
            .then(() => runInAction(() => {
                this.componentState.username = '';
                this.componentState.password = '';
            }))
            .catch((err) => console.log(err));
    }

    @action.bound
    _succesfulLogin()
    {
        if (this.componentState.rememberMeChecked) {
            localStorage.setItem('token', this.componentState.loginData.token);
            localStorage.setItem('user', this.componentState.username.split('@')[0]);
        }
        this.props.state.token = this.componentState.loginData.token;
        this.props.state.username = this.componentState.username.split('@')[0];
    }

    @action.bound
    _handleUsernameChange(event) {
        this.componentState.username = event.target.value;
    }

    @action.bound
    _handlePasswordChange(event) {
        this.componentState.password = event.target.value;
    }

    @action.bound
    _showHidePassword() {
        this.componentState.isInputPassword = !this.componentState.isInputPassword;
    }

    @action.bound
    _togleRememberMe() {
        this.componentState.rememberMeChecked = !this.componentState.rememberMeChecked;
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
                        checked={this.componentState.rememberMeChecked}
                        onChange={this._togleRememberMe}
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

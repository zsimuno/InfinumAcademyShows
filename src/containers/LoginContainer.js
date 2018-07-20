import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonComponent } from '../components/ButtonComponent';

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

export class LoginContainer extends Component {
    constructor(args) {
        super(args);
        this.state = {
            username: '',
            password: '',
            isInputPassword: true,
        };

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
        this._showHidePassword = this._showHidePassword.bind(this);
    }

    _login() {
        fetch('https://api.infinum.academy/api/users/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.username,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('token', data.data.token);
            })
            .catch((error) => console.log(error));
    }

    _handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    _handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    _showHidePassword() {
        this.setState({ isInputPassword: !this.state.isInputPassword });
    }


    render() {
        return (
            <div className={container}>

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
                        value={this.state.username}
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
                        type={this.state.isInputPassword ? "password" : "text"}
                        value={this.state.password}
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

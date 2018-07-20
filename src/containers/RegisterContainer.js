import React, { Component } from 'react';
import { css } from 'emotion';
import { ButtonComponent } from '../components/ButtonComponent';

import { customInput, inputLabel, showHidePassword } from '../style';

import eyeImage from '../images/ic-akcije-show-password-red@3x.png';


const container = css`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
    
`;

export class RegisterContainer extends Component {
    constructor(args) {
        super(args);
        this.state = {
            username: '',
            password: '',
            isInputPassword: true,
        };

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._register = this._register.bind(this);
        this._showHidePassword = this._showHidePassword.bind(this);
    }

    _register() {
        fetch('https://api.infinum.academy/api/users/', {
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

                <div>
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
                        onChange={this._handleUsernameChange} />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className={inputLabel}
                    >
                        and my password is
                    </label> <br />
                    <input
                        className={customInput}
                        type={this.state.isInputPassword ? "password" : "text"}
                        id="password"
                        value={this.state.password}
                        onChange={this._handlePasswordChange}
                    />
                    <img
                        className={showHidePassword}
                        src={eyeImage}
                        alt="S/H"
                        onClick={this._showHidePassword} />
                </div>

                <div>
                    <ButtonComponent
                        onClick={this._register}
                        text='REGISTER'
                    />
                </div>

            </div>
        )
    }
}
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { css } from 'emotion';
import { register } from '../services/user';

import { ButtonComponent } from '../components/ButtonComponent';
import { HeaderComponent } from '../components/HeaderComponent';

import { customInput, inputLabel, showHidePassword } from '../style';

import eyeImage from '../images/ic-akcije-show-password-red@3x.png';

const container = css`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 30px;
    
`;

@observer
export class RegisterContainer extends Component {
    constructor(args) {
        super(args);

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._register = this._register.bind(this);
        this._showHidePassword = this._showHidePassword.bind(this);
    }

    @observable
    componentState = {
        username: '',
        password: '',
        isInputPassword: true,
        registerData: {},
    };

    _register() {
        register(this.componentState, this.componentState.username, this.componentState.password)
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
                <HeaderComponent hideLine={true} hideLogin={true}/>
                                
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
                        value={this.componentState.username}
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
                        type={this.componentState.isInputPassword ? "password" : "text"}
                        id="password"
                        value={this.componentState.password}
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
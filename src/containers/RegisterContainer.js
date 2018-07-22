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

const state = {
    @observable
    username: '',
  
    @observable
    password: '',

    @observable
    isInputPassword: true,

    @observable
    registerData: {},
};



@observer
export class RegisterContainer extends Component {

    _register() {
        register(state, state.username, state.password)
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
                        value={state.username}
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
                        type={state.isInputPassword ? "password" : "text"}
                        id="password"
                        value={state.password}
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
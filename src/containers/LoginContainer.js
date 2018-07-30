import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, runInAction } from 'mobx';
import { login } from '../services/user';

import { UserFormComponent } from '../components/UserFormComponent';
import { HeaderComponent } from '../components/HeaderComponent';

@inject("state")
@observer
export class LoginContainer extends Component {

    @observable
    componentState = {
        username: '',
        password: '',
        isInputPassword: true,
        loginData: {},
        rememberMe: false,
        errors: [],
    };

    @action.bound
    _submitForm(event) {
        event.preventDefault();
        login(this.componentState, this.componentState.username, this.componentState.password)
            .then(() => this.componentState.loginData.errors &&
                Promise.reject(this.componentState.loginData.errors))
            .then(() => this._succesfulLogin())
            .then(() => console.log('token:', this.componentState.loginData.token))
            .then(() => this.props.history.push('/'))
            .catch((errors) => runInAction(() => {
                this.componentState.errors = errors.length > 0 ? errors : ['Wrong username/password'];
            }))
            .then(() => runInAction(() => {
                this.componentState.username = '';
                this.componentState.password = '';
            }));
    }

    @action.bound
    _succesfulLogin() {
        if (this.componentState.rememberMe) {
            localStorage.setItem('token', this.componentState.loginData.token);
            localStorage.setItem('user', this.componentState.username.split('@')[0]);
        }
        else {
            sessionStorage.setItem('token', this.componentState.loginData.token);
            sessionStorage.setItem('user', this.componentState.username.split('@')[0]);
        }
        this.props.state.username = this.componentState.username.split('@')[0];
        this.props.state.token = this.componentState.loginData.token;
    }

    @action.bound
    _onInputChange(fieldName, fieldValue = 'value') {
        return action((event) => {
            const value = event.target[fieldValue];
            this.componentState[fieldName] = value;
        });
    }

    @action.bound
    _showHidePassword(event) {
        this.componentState.isInputPassword = !this.componentState.isInputPassword;
    }

    render() {
        return (
            <div>
                <HeaderComponent hideLine hideLogin />
                <UserFormComponent
                    onSubmit={this._submitForm}
                    onChangeFunction={this._onInputChange}
                    username={this.componentState.username}
                    password={this.componentState.password}
                    rememberMe={this.componentState.rememberMe}
                    isInputPassword={this.componentState.isInputPassword}
                    userLoggedIn={this.props.state.getUsername}
                    showHidePasswordFunction={this._showHidePassword}

                    errors={this.componentState.errors}
                    buttonText='LOGIN'
                />
            </div>
        );
    }
}

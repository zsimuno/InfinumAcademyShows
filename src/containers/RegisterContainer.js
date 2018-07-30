import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action, runInAction } from 'mobx';
import { register } from '../services/user';

import { UserFormComponent } from '../components/UserFormComponent';
import { HeaderComponent } from '../components/HeaderComponent';


@inject("state")
@observer
export class RegisterContainer extends Component {

    @observable
    componentState = {
        username: '',
        password: '',
        isInputPassword: true,
        registerData: {},
        errors: [],
    };

    @action.bound
    _submitForm(event) {
        event.preventDefault();
        register(this.componentState, this.componentState.username, this.componentState.password)
            .then(() => this.componentState.registerData.errors &&
                Promise.reject(this.componentState.registerData.errors))
            .then(() => this.props.history.push('/'))
            .then(() => console.log('Register data:', this.componentState.registerData))
            .catch((errors) => runInAction(() => {
                this.componentState.errors = errors;
            }))
            .then(() => runInAction(() => {
                this.componentState.username = '';
                this.componentState.password = '';
            }));
    }

    @action.bound
    _onInputChange(fieldName, fieldValue = 'value') {
        return action((event) => {
            const value = event.target[fieldValue];
            this.componentState[fieldName] = value;
        });
    }

    @action.bound
    _showHidePassword() {
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
                    isInputPassword={this.componentState.isInputPassword}
                    userLoggedIn={this.props.state.getUsername}
                    showHidePasswordFunction={this._showHidePassword}
                    errors={this.componentState.errors}
                    buttonText='REGISTER'
                />
            </div>
        );
    }
}
import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';

import { buttonStyle, customInput, input, showHidePassword } from './style';


const container = css`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    
`;

const checkbox = css`
    background-color: #FF7CAA;
    border: none;
`;

const link = css` 
    color: #FF7CAA;
    text-decoration: none;
    `;


export class LoginComponent extends Component {
    constructor(args) {
        super(args);
        this.state = {
            username: '',
            password: ''
        };

        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
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
                sessionStorage.setItem('user', this.state.username);
            })
            .catch((error) => console.log(error));
    }

    _handleUsernameChange(event) {
        this.setState({ username: event.target.value });
    }

    _handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    _showHidePassword(){
        const x = document.getElementById("password");
        x.type = (x.type === "password") ? "text" : "password";
    }


    render() {
        return (
            <div className={container}>
                <div className={input}>
                    <label htmlFor="username">My username is </label> <br />
                    <input className={customInput} type="text" id="username" value={this.state.username} onChange={this._handleUsernameChange} />
                </div>

                <div className={input}>
                    <label htmlFor="password">and my password is </label> <br />
                    <input className={customInput} type="password" id="password" value={this.state.password} onChange={this._handlePasswordChange} />
                    <img className={showHidePassword} src={require('./images/ic-akcije-show-password-red@3x.png')} alt="S/H" onClick={this._showHidePassword} />
                </div>

                <div>
                    <input type="checkbox" name="rememberMe" value="Remember me" className={checkbox} />
                        Remember me
                </div>

                <div>
                    <button onClick={this._login} className={buttonStyle}>LOGIN</button>
                </div>
                
                <div>
                    Still don't have an account? <Link to='/register' className={link}>Register</Link>
                </div>
            </div>
        )
    }
}
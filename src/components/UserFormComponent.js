import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { css } from 'emotion';

import { ButtonComponent } from '../components/ButtonComponent';
import { HeaderComponent } from '../components/HeaderComponent';

import { customInput, inputLabel, showHidePassword } from '../style';

import eyeImage from '../images/ic-akcije-show-password-red@3x.png';

const container = css`
    display: grid;
    grid-gap: 30px;
`;

const link = css` 
    color: #FF7CAA;
    text-decoration: none;
`;

@observer
export class UserFormComponent extends Component {
    render() {
        const {
            onSubmit,
            onChangeFunction,
            username,
            password,
            rememberMe,
            userLoggedIn,
            showHidePasswordFunction,
            isInputPassword,
            errors,
            buttonText,
        } = this.props;
        const isLoginScreen = (rememberMe !== undefined);
        return (
            <div>
                <HeaderComponent hideLine={true} hideLogin={true} />
                {
                userLoggedIn ?
                    <h1>
                        You are already logged in!
                    </h1>
                    :
                    <form className={container} onSubmit={onSubmit}>
                        <div>
                            {errors.length > 0 && 
                            <div>
                                <h4>{isLoginScreen ? 'Login ' : 'Registration ' }failed!</h4>
                                {errors.map((error, index) => <p key={index}>{error}</p>)}
                            </div>}
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
                                value={username}
                                onChange={onChangeFunction('username')}
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
                                type={isInputPassword ? "password" : "text"}
                                id="password"
                                value={password}
                                onChange={onChangeFunction('password')}
                            />
                            <img
                                className={showHidePassword}
                                src={eyeImage}
                                alt="S/H"
                                onClick={showHidePasswordFunction}
                            />
                        </div>

                        {isLoginScreen && 
                        <div>
                            <input
                                id="rememberme"
                                type="checkbox"
                                name="rememberMe"
                                value="Remember me"
                                checked={rememberMe}
                                onChange={onChangeFunction('rememberMe', 'checked')}
                            />
                            <label htmlFor="rememberme"> Remember me</label>
                        </div>}

                        <div>
                            <ButtonComponent
                                type='submit'
                                text={buttonText}
                            />
                        </div>
                        {isLoginScreen && 
                        <div>
                            Still don't have an account? <Link to='/register' className={link}>Register</Link>
                        </div>}

                        
                    </form>
                }
            </div>
        )
    }
}
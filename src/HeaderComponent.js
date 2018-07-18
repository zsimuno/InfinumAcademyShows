import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { image, buttonStyle } from './style';

const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 30px;
    margin-bottom: 50px;
`;

const login = css` 
    justify-self: end; 
    color: #FF7CAA;
    text-decoration: none;
    `;


export class HeaderComponent extends Component {
    constructor(args){
        super(args);

        this._logout = this._logout.bind(this);
    }

    _logout(){
        sessionStorage.clear();
    }
    render() {
        // const {  } = this.props;
        return (
            <div className={container}>
                <div>
                    <Link to='/'>
                        <img className={image} src={require('./images/img-logo-horizontal@3x.png')} alt="shows" />
                    </Link>
                </div>

                <div></div>

                <div >
                    {
                        sessionStorage.getItem('user') ?
                        <div className={login}>
                            Hi, {sessionStorage.getItem('user')}
                            <button onClick={this._logout} className={buttonStyle}>LOGOUT</button>
                        </div> 
                        :
                        <Link to='/login' className={login}>
                            Login
                        </Link> 
                    }
                    
                </div>
            </div>

        )
    }
}

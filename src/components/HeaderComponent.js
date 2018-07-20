import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { LineComponent } from './LineComponent';


import { css } from 'emotion';
import { image } from '../style';

import showsLogo from '../images/img-logo-horizontal@3x.png';


const container = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 40px;
    margin-bottom: 50px;
`;

const login = css` 
    justify-self: end; 
    color: #FF7CAA;
    text-decoration: none;
    `;


@observer
export class HeaderComponent extends Component {
    render() {
        const { hideLogin, hideLine } = this.props;
        return (
            <div>
                <div className={container}>
                    <div>
                        <Link to='/'>
                            <img
                                className={image}
                                src={showsLogo}
                                alt="shows" />
                        </Link>
                    </div>

                    {
                    !hideLogin 
                    &&
                    <div className={login}>
                        <Link to='/login' className={login}>
                            Login
                            </Link>
                    </div>
                    }
                </div>
                {
                !hideLine && <LineComponent widthToEnd={true} />
                }
            </div>

        )
    }
}

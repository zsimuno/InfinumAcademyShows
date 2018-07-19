import React, { Component } from 'react';

import { css } from 'emotion';
import { image } from './style';

import showLogo from './images/img-logo-horizontal@3x.png';
import facebookLogo from './images/ic-facebook@3x.png';
import twitterLogo from './images/ic-linkedin@3x.png';
import linkedInLogo from './images/ic-twitter@3x.png';


const container = css`
    margin-top: 30px;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    height: 100px;
    color: #A0A0A0;
`;

const information = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: start;
    align-items: center;
`;

const footerBottom = css`
    display: grid;
    grid-template-columns: 1fr 1fr;
`; 

const socialLinks = css`
    justify-self: end;
`;


export class FooterComponent extends Component {
    render() {
        return (
            <div className={container} >
                <div>
                    <img className={image} src={showLogo} alt="shows" />
                </div>

                <div className={information}>
                    <div>About <br /> us</div>
                    <div>Privacy <br />  policy</div>
                    <div>Terms of <br />  service</div>
                </div>

                <div className={footerBottom}>
                    <div>
                        &copy;2018 Shows. All right reserved Aditional terms and conditions may apply.
                    </div>
                    <div className={socialLinks}>
                        <img className={image} src={facebookLogo} alt="Facebook" />
                        <img className={image} src={twitterLogo} alt="LinkedIn" />
                        <img className={image} src={linkedInLogo} alt="Twitter" />
                    </div>
                </div>
            </div>

        )
    }
}

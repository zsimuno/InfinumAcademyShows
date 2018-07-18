import React, { Component } from 'react';
import { css } from 'emotion';
import { image } from './style';

const container = css`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20px 2fr 1fr;
    height: 120px;
    grid-auto-rows: 50px;
    color: #A0A0A0;
`;

const information = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    align-items: center;
`;

const socialLinks = css`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: end;
`;


export class FooterComponent extends Component {
    render() {
        // const {  } = this.props;
        return (
            <div className={container} >
                <div>
                    <img className={image} src={require('./images/img-logo-horizontal@3x.png')} alt="shows" />
                </div>
                <div></div>

                <div className={information}>
                    <div>About <br /> us</div>
                    <div>Privacy <br />  policy</div>
                    <div>Terms of <br />  service</div>
                </div>
                <div></div>

                <div>
                    &copy;2018 Shows. All right reserved Aditional terms and conditions may apply.
                </div>
                <div className={socialLinks}>
                    <div>
                        <img className={image} src={require('./images/ic-facebook@3x.png')} alt="Facebook" />
                        <img className={image} src={require('./images/ic-linkedin@3x.png')} alt="LinkedIn" />
                        <img className={image} src={require('./images/ic-twitter@3x.png')} alt="Twitter" />
                    </div>
                </div>
            </div>

        )
    }
}

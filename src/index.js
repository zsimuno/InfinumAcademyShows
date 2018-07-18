import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ShowsContainer } from './ShowsContainer';
import { ShowDetailsContainer } from './ShowDetailsContainer';
import { HeaderContainer } from './HeaderContainer';
import { FooterContainer } from './FooterContainer';
import { LoginContainer } from './LoginContainer';
import { RegisterContainer } from './RegisterContainer';

import { css } from 'emotion';

const body = css`
    font-family: Sans-serif;
    height:100%;
    width: 80%;
    vertical-align:middle;
    margin-left: 10%;
    color: #505050;
`;


ReactDOM.render((
    <BrowserRouter>
        <div className={body}>
            <Route path="/" component={HeaderContainer} />
            <Route exact path="/" component={ShowsContainer} />
            <Route exact path="/show/:showId" component={ShowDetailsContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route path="/" component={FooterContainer} />
        </div>
    </BrowserRouter>
), document.querySelector('.js-app'));


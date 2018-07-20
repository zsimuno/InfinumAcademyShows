import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ShowsContainer } from './containers/ShowsContainer';
import { ShowDetailsContainer } from './containers/ShowDetailsContainer';
import { LoginContainer } from './containers/LoginContainer';
import { RegisterContainer } from './containers/RegisterContainer';

import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { LineComponent } from './components/LineComponent';

import { css } from 'emotion';

const body = css`
    font-family: Sans-serif;
    width: 80%;
    margin-left: 10%;
    color: #505050;
`;



ReactDOM.render((
    <BrowserRouter>
        <div className={body}>
            <Route exact path="/" component={ShowsContainer} />
            <Route exact path="/show/:showId" component={ShowDetailsContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
        </div>
    </BrowserRouter>
), document.querySelector('.js-app'));


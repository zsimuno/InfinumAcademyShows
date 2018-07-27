import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import { ShowsContainer } from './containers/ShowsContainer';
import { ShowDetailsContainer } from './containers/ShowDetailsContainer';
import { LoginContainer } from './containers/LoginContainer';
import { RegisterContainer } from './containers/RegisterContainer';
import { EpisodeDetailsContainer } from './containers/EpisodeDetailsContainer';
import { AddEpisodeContainer } from './containers/AddEpisodeContainer';

import { css } from 'emotion';

import state from './state';

const body = css`
    font-family: Sans-serif;
    width: 80%;
    margin-left: 10%;
    color: #505050;
`;

configure({ enforceActions: true });

ReactDOM.render((
    <Provider state={state}>
    <BrowserRouter>
        <div className={body}>
            <Route exact path="/" component={ShowsContainer} />
            <Route path="/show/:showId" component={ShowDetailsContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/register" component={RegisterContainer} />
            <Route exact path="/:showId/episode/:episodeId" component={EpisodeDetailsContainer} />
            <Route exact path="/show/:showId/addEpisode" component={AddEpisodeContainer} />
        </div>
    </BrowserRouter>
    </Provider>
), document.querySelector('.js-app'));


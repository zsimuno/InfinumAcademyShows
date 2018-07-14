import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ShowContainer } from './ShowContainer';
import { EpisodeContainer } from './EpisodeContainer';


ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path = "/"                 component = {ShowContainer} />
            <Route exact path = "/episodes/:showId" component = {EpisodeContainer} />
        </div>
    </BrowserRouter>
), document.querySelector('.js-app'));


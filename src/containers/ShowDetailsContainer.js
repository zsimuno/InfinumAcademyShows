import React, { Component } from 'react';
import state from '../state';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';

import { observer } from 'mobx-react';
import { getInfo as getShowInfo, getAllEpisodes } from '../services/show';


@observer
export class ShowDetailsContainer extends Component {
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(state, showId);
        getAllEpisodes(state, showId);

    }

    render() {
        return <ShowDetailsComponent episodes={state.episodes} errorMessage={state.errorMessage} showInfo={state.showInfo} />

    }
}

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';

import { getInfo as getShowInfo, getAllEpisodes } from '../services/show';


const state = {
    @observable
    showInfo: {},

    @observable
    episodes: [],

    @observable
    errorMessage: null,
};

@observer
export class ShowDetailsContainer extends Component {
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(state, showId);
        getAllEpisodes(state, showId);

        console.log(state);

    }

    render() {
        return <ShowDetailsComponent episodes={state.episodes} errorMessage={state.errorMessage} showInfo={state.showInfo} />

    }
}

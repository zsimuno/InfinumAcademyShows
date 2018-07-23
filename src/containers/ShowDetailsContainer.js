import React, { Component } from 'react';
import { observer } from 'mobx-react';
import state from '../state';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';

import { getInfo as getShowInfo, getAllEpisodes as getAllShowEpisodes} from '../services/show';

@observer
export class ShowDetailsContainer extends Component {
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(state, showId);
        getAllShowEpisodes(state, showId);
    }

    render() {
        return <ShowDetailsComponent episodes={state.episodes} errorMessage={state.errorMessage} showInfo={state.showInfo} />

    }
}

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';

import { getInfo as getShowInfo, getAllEpisodes as getAllShowEpisodes } from '../services/show';

@inject("state")
@observer
export class ShowDetailsContainer extends Component {

    @action
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(this.props.state, showId);
        getAllShowEpisodes(this.props.state, showId);
    }

    render() {
        return <ShowDetailsComponent
            episodes={this.props.state.episodes}
            errorMessage={this.props.state.errorMessage}
            showInfo={this.props.state.showInfo}
        />

    }
}

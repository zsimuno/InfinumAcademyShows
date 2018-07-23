import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { getInfo as getEpisodeInfo, getComments as getEpisodeComments } from '../services/episode';
import { EpisodeDetailsComponent } from '../components/EpisodeDetailsComponent';

@inject("state")
@observer
export class EpisodeDetailsContainer extends Component {

    @action
    componentDidMount() {
        const { episodeId } = this.props.match.params;

        this.state.episodeInformation = getEpisodeInfo(episodeId);
        getEpisodeComments(this.state, episodeId);

    }

    render() {
        return <EpisodeDetailsComponent
            episodeInformation={this.state.episodeInformation}
            episodeComments={this.state.episodeComments}
        />
    }
}
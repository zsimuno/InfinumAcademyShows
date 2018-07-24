import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, runInAction } from 'mobx';
import { getInfo as getEpisodeInfo, getComments as getEpisodeComments } from '../services/episode';
import { EpisodeDetailsComponent } from '../components/EpisodeDetailsComponent';

@inject("state")
@observer
export class EpisodeDetailsContainer extends Component {

    @action
    componentDidMount() {
        const { episodeId } = this.props.match.params;

        getEpisodeInfo(episodeId)
            .then((episodeInfo) => runInAction(() => this.props.state.episodeInformation = episodeInfo));

        getEpisodeComments(this.props.state, episodeId);

    }

    render() {
        return <EpisodeDetailsComponent
            episodeInformation={this.props.state.episodeInformation}
            episodeComments={this.props.state.episodeComments}
        />
    }
}
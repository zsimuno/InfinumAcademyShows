import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, runInAction, observable } from 'mobx';
import { getInfo as getEpisodeInfo, getComments as getEpisodeComments, addComment as addCommentToEpisode } from '../services/episode';
import { EpisodeDetailsComponent } from '../components/EpisodeDetailsComponent';

@inject("state")
@observer
export class EpisodeDetailsContainer extends Component {

    @observable
    componentState = {
        commentText: '',
    }

    @action.bound
    _sendComment() {
        const { episodeId } = this.props.match.params;
        console.log(episodeId);
        addCommentToEpisode(this.props.state, this.componentState.commentText, episodeId)
            .then(() => runInAction(() => this.componentState.commentText = ''));
    }

    @action.bound
    _handleCommentChange(event) {
        this.componentState.commentText = event.target.value;
    }

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
            commentText={this.componentState.commentText}
            sendComment={this._sendComment}
            onTextAreaChange={this._handleCommentChange}
        />
    }
}
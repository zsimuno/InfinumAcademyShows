import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, runInAction, observable } from 'mobx';
import {
    getInfo as getEpisodeInfo,
    getComments as getEpisodeComments,
    addComment as addCommentToEpisode,
} from '../services/episode';
import { logout } from '../services/user';
import { EpisodeDetailsComponent } from '../components/EpisodeDetailsComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';


@inject("state")
@observer
export class EpisodeDetailsContainer extends Component {

    @observable
    componentState = {
        commentText: '',
        loadingDone: false,
    }

    @action.bound
    _sendComment() {
        const { episodeId } = this.props.match.params;
        addCommentToEpisode(this.props.state, this.componentState.commentText, episodeId)
            .then(() => runInAction(() => this.componentState.commentText = ''));
    }

    @action.bound
    _onInputChange(fieldName, fieldValue = 'value') {
        return action((event) => {
            const value = event.target[fieldValue];
            this.componentState[fieldName] = value;
        });
    }

    @action
    componentDidMount() {
        const { episodeId } = this.props.match.params;

        getEpisodeInfo(episodeId)
            .then((episodeInfo) => runInAction(() => this.props.state.episodeInformation = episodeInfo));

        getEpisodeComments(this.props.state, episodeId)
            .then(() => runInAction(() => this.componentState.loadingDone = true));

    }

    render() {
        return (
            <div>
                <HeaderComponent username={this.props.state.getUsername} logout={() => logout(this.props.state)} />
                <EpisodeDetailsComponent
                    episodeInformation={this.props.state.episodeInformation}
                    episodeComments={this.props.state.episodeComments}
                    commentText={this.componentState.commentText}
                    sendComment={this._sendComment}
                    onInputChange={this._onInputChange}
                    userLoggedIn={this.props.state.getUsername}
                    loadingDone={this.componentState.loadingDone}
                />
                <FooterComponent />
            </div>
        );
    }
}
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable, runInAction } from 'mobx';

import { add as addEpisode } from '../services/episode';
import { uploadFile as uploadEpisodeImage } from '../services/media';
import { AddEpisodeComponent } from '../components/AddEpisodeComponent';


@inject("state")
@observer
export class AddEpisodeContainer extends Component {

    @observable
    componentState = {
        title: '',
        description: '',
        episodeNumber: '',
        season: '',
        addingFailed: '',
        episodeOptions: Array.from(new Array(40), (x, i) => i),
        seasonOptions: Array.from(new Array(40), (x, i) => i),
        image: undefined,
        imageFile: undefined,
    }


    @action.bound
    _addEpisode(event) {
        event.preventDefault();
        const { showId } = this.props.match.params;
        console.log(showId);
        const episodeData = {
            showId: showId,
            mediaId: "",
            title: this.componentState.title,
            description: this.componentState.description,
            episodeNumber: this.componentState.episodeNumber,
            season: this.componentState.season,

        }

        uploadEpisodeImage(this.props.state, this.componentState.imageFile)
            .then(() => {
                if(!this.props.state.mediaData._id){
                    return Promise.reject(this.props.state.mediaData.error || ['Episode picture failed to add']);
                }
                episodeData.mediaId = this.props.state.mediaData._id;
            })
            .then(() => addEpisode(this.props.state, episodeData)
                .then(() => runInAction(() => this.props.history.push('./')))
                .catch((err) => runInAction(() => this.componentState.addingFailed = err))
                .then(() => runInAction(() => Object.assign(this.componentState,
                    {
                        title: '',
                        description: '',
                        episodeNumber: '',
                        season: '',
                    }))));


    }

    @action.bound
    _onInputChange(fieldName, fieldValue = 'value') {
        return action((event) => {
            const value = event.target[fieldValue];
            this.componentState[fieldName] = value;
        });
    }

    @action.bound
    _onDrop(files) {
        this.componentState.imageFile = new FormData();
        this.componentState.imageFile.append('file', files[0]);

        this.componentState.image = files[0];
        console.log(this.componentState.imageFile);
    }

    @action.bound
    _onClose() {
        this.props.history.push('./');
    }

    render() {
        return (
            <AddEpisodeComponent
                {...this.componentState}
                onDrop={this._onDrop}
                onChangeFunction={this._onInputChange}
                onSubmit={this._addEpisode}
                onClose={this._onClose}
            />
        )
    }
}

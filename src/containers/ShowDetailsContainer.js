import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';

import { getInfo as getShowInfo, getAllEpisodes as getAllShowEpisodes, like as likeShow, dislike as dislikeShow } from '../services/show';

@inject("state")
@observer
export class ShowDetailsContainer extends Component {

    @action
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(this.props.state, showId);
        getAllShowEpisodes(this.props.state, showId);

    }

    @action.bound
    _like() {
        likeShow(this.props.state, this.props.state.showInfo._id);
    }

    @action.bound
    _dislike() {
        dislikeShow(this.props.state, this.props.state.showInfo._id);
    }

    render() {
        return <ShowDetailsComponent
            episodes={this.props.state.episodes}
            errorMessage={this.props.state.errorMessage}
            showInfo={this.props.state.showInfo}
            onLikeClick={this._like}
            onDislikeClick={this._dislike}
            isUserLoggedIn={this.props.state.getUsername}
        />

    }
}

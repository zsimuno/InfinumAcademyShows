import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable, runInAction } from 'mobx';
import { logout } from '../services/user';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';


import {
    getInfo as getShowInfo,
    getAllEpisodes as getAllShowEpisodes,
    like as likeShow,
    dislike as dislikeShow,
} from '../services/show';

@inject("state")
@observer
export class ShowDetailsContainer extends Component {

    @observable
    componentState = {
        loadingDone: false,
        isShowFavorite: false,
    };

    @action
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(this.props.state, showId);
        getAllShowEpisodes(this.props.state, showId)
            .then(() => runInAction(() => this.componentState.loadingDone = true));

        this.componentState.isShowFavorite = this.props.state.getFavoriteShows.includes(showId);

    }

    @action.bound
    _like() {
        likeShow(this.props.state, this.props.state.showInfo._id);
    }

    @action.bound
    _dislike() {
        dislikeShow(this.props.state, this.props.state.showInfo._id);
    }

    @action.bound
    _toggleFavorite() {
        let favorites;
        if (localStorage.getItem('favoriteShows')) {

            favorites = JSON.parse(localStorage.getItem('favoriteShows'));

            if (this.componentState.isShowFavorite) {
                favorites[this.props.state.getUsername] = favorites[this.props.state.getUsername].filter((favoriteShowId) => favoriteShowId !== this.props.state.showInfo._id);
                if(favorites[this.props.state.getUsername].length === 0){
                    delete favorites[this.props.state.getUsername]
                }
            }
            else {
                if (favorites[this.props.state.getUsername]) {
                    favorites[this.props.state.getUsername].push(this.props.state.showInfo._id);
                }
                else {
                    favorites = { ...favorites, ...{ [this.props.state.getUsername]: [this.props.state.showInfo._id] } };
                }
            }
        }
        else {
            favorites = { [this.props.state.getUsername]: [this.props.state.showInfo._id] };
        }
        localStorage.setItem('favoriteShows', JSON.stringify(favorites));
        this.componentState.isShowFavorite = !this.componentState.isShowFavorite;
    }

    render() {
        return (
            <div>
                <HeaderComponent username={this.props.state.getUsername} logout={() => logout(this.props.state)} />
                <ShowDetailsComponent
                    episodes={this.props.state.episodes}
                    errorMessage={this.props.state.errorMessage}
                    showInfo={this.props.state.showInfo}
                    onLikeClick={this._like}
                    onDislikeClick={this._dislike}
                    isUserLoggedIn={this.props.state.getUsername}
                    loadingDone={this.componentState.loadingDone}
                    toggleFavoriteShow={this._toggleFavorite}
                    isShowFavorite={this.componentState.isShowFavorite}

                />
                <FooterComponent />
            </div>
        );
    }
}

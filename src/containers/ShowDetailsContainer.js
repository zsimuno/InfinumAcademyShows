import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable, runInAction } from 'mobx';
import { logout } from '../services/user';

import { ShowDetailsComponent } from '../components/ShowDetailsComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';


import { getInfo as getShowInfo,
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
    };

    @action
    componentDidMount() {
        const { showId } = this.props.match.params;

        getShowInfo(this.props.state, showId);
        getAllShowEpisodes(this.props.state, showId)
            .then(() => runInAction(() => this.componentState.loadingDone = true));

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

                />
                <FooterComponent />
            </div>
        );
    }
}

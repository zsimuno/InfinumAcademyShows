import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action, observable } from 'mobx';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { customInput } from '../style';

@inject("state")
@observer
export class AddEpisodeContainer extends Component {

    @observable
    componentState = {
        title: '',
        description: '',
        episodeNumber: '',
        season: '',
    }


    // "showId": "string",
    // "mediaId": "string",
    // "title": "string",
    // "description": "string",
    // "episodeNumber": "string",
    // "season": "string"


    @action.bound
    _addEpisode() {
        const { showId } = this.props.match.params;

    }

    @action.bound
    _handleTitleChange(event) {
        this.componentState.title = event.target.value;
    }

    @action.bound
    _handleDescriptionChange(event) {
        this.componentState.description = event.target.value;
    }

    @action.bound
    _handleEpisodeNumberChange(event) {
        this.componentState.episodeNumber = event.target.value;
    }
    @action.bound
    _handleSeasonChange(event) {
        this.componentState.season = event.target.value;
    }




    render() {
        return (
            <div>
                <HeaderComponent />
                <h1>Add episode:</h1>
                <label
                    htmlFor="title"
                >
                    Title:
                        </label>
                <input
                    id="title"
                    type="text"
                    className={customInput}
                    value={this.componentState.title}
                    onChange={this._handlePasswordChange}
                />
                <label
                    htmlFor="dascription"
                >
                    Description:
                        </label>
                        
                <textarea
                    id="dascription"
                    type="text"
                    value={this.componentState.description}
                    onChange={this._handleDescriptionChange}
                />

                <label
                    htmlFor="episodeNumber"
                >
                    Episode number:
                        </label>
                <input
                    id="episodeNumber"
                    type="text"
                    className={customInput}
                    value={this.componentState.episodeNumber}
                    onChange={this._handleEpisodeNumberChange}
                />

                <label
                    htmlFor="season"
                >
                    Season:
                        </label>
                <input
                    id="season"
                    type="text"
                    className={customInput}
                    value={this.componentState.season}
                    onChange={this._handleSeasonChange}
                />
                <FooterComponent />
            </div>
        )
    }
}

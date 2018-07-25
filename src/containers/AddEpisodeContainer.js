import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import { action, observable, runInAction } from 'mobx';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { customInput, customTextArea, inputLabel } from '../style';
import { css } from 'emotion';
import { ButtonComponent } from '../components/ButtonComponent';
import { LeftArrowComponent } from '../components/LeftArrowComponent';
import { LoginRequiredComponent } from '../components/LoginRequiredComponent';
import { add as addEpisode } from '../services/episode';

const container = css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`;

const textAreaStyle = css`
    ${customTextArea}
    font-size: 20px;
    width: 50%;
    height: 100px;
    resize: none;
`;

@inject("state")
@observer
export class AddEpisodeContainer extends Component {

    @observable
    componentState = {
        title: '',
        description: '',
        episodeNumber: '',
        season: '',
        episodeAdded: false,
    }


    @action.bound
    _addEpisode() {
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

        addEpisode(this.props.state, episodeData)
            .then(() => runInAction(() => Object.assign(this.componentState,
                {
                    title: '',
                    description: '',
                    episodeNumber: '',
                    season: '',
                    episodeAdded: true,
                })));


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
            !(this.props.state.getUsername) ?
                <LoginRequiredComponent />
                :
                this.componentState.episodeAdded ?
                <Redirect to='./' />
                :
                <div>
                    <HeaderComponent />
                    <LeftArrowComponent linkTo='./' />
                    <div className={container}>
                        <h1>Add episode:</h1>
                        <label
                            htmlFor="title"
                            className={inputLabel}
                        >
                            Title:
                        </label>
                        <input
                            id="title"
                            type="text"
                            className={customInput}
                            value={this.componentState.title}
                            onChange={this._handleTitleChange}
                        />
                        <br />
                        <label
                            htmlFor="dascription"
                            className={inputLabel}
                        >
                            Description:
                        </label>

                        <textarea
                            id="dascription"
                            type="text"
                            className={textAreaStyle}
                            value={this.componentState.description}
                            onChange={this._handleDescriptionChange}
                            placeholder="Enter description here..."
                        />
                        <br />
                        <label
                            htmlFor="episodeNumber"
                            className={inputLabel}
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
                        <br />
                        <label
                            htmlFor="season"
                            className={inputLabel}
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
                    </div>
                    <br />
                    <ButtonComponent
                        text="ADD EPISODE"
                        onClick={this._addEpisode}
                    />
                    <FooterComponent />
                </div>
        )
    }
}

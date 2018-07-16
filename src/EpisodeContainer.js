import React, { Component } from 'react';

import { EpisodeComponent } from './EpisodeComponent';

export class EpisodeContainer extends Component {
    constructor(args) {
        super(args);

        this.state = {
            episodes: [],
            errorMessage: null,
        };
    }



    componentDidMount() {
        const { showId } = this.props.match.params;

        // Check if show exists with that id
        fetch(`https://api.infinum.academy/api/shows/${showId}`)
            .then((response) => response.json())
            .then((response) => {
                // If there are no errors just continue fetching episodes
                if (response.errors !== undefined) {
                    return Promise.reject(response.errors[0]);
                }

            })
            .then(() => {
                // Add episodes of the show that has a specific id
                fetch(`https://api.infinum.academy/api/shows/${showId}/episodes`)
                    .then((response) => response.json())
                    .then((response) => this.setState({ episodes: response.data }));
            })
            .catch((err) => this.setState({ errorMessage: err }));

    }

    render() {
        return <EpisodeComponent episodes={this.state.episodes} errorMessage={this.state.errorMessage} />

    }
}

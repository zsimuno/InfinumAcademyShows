import React, { Component } from 'react';

import { EpisodeComponent } from './EpisodeComponent';

export class EpisodeContainer extends Component {
    constructor(args) {
        super(args);

        this.state = {
            episodes: [],
        };
    }



    componentDidMount() {
        // Get id of the show you want to fetch episodes of
        const { showId } = this.props.match.params; //TODO: Provjerit jel postoji

        // Add episodes of the show that has a specific id
        fetch(`https://api.infinum.academy/api/shows/${showId}/episodes`)
            .then((response) => response.json())
            .then((response) => this.setState({ episodes: response.data }));
        
    }




    render(){
        return <EpisodeComponent episodes = {this.state.episodes} />
        
    }
}

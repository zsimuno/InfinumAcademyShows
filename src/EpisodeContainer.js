import React, { Component } from 'react';

import { EpisodeComponent } from './EpisodeComponent';

export class EpisodeContainer extends Component {
    constructor(args) {
        super(args);

        this.state = {
            episodes: [],
            comments: [],
        };
    }



    componentDidMount() {
        // Get id of the show you want to fetch episodes of
        const { showId } = this.props.match.params; //TODO: Provjerit jel postoji

        // Add episodes of the show that has a specific id
        fetch(`https://api.infinum.academy/api/shows/${showId}/episodes`)
            .then((response) => response.json())
            .then((response) => this.setState({ episodes: response.data }))
            .then(() => {
                // Fetch all coments for the episodes of this show
                this.state.episodes.forEach((episode) => {
                    const comm = Object.assign({}, this.state.comments);
                    fetch(`https://api.infinum.academy/api/episodes/${episode._id}/comments`)
                        .then((response) => response.json())
                        // Add comments of one episode 
                        // (this.state.comments[episode._id] should be comments of that episode)
                        .then((response) => comm[episode._id] = response.data)
                        .then(() => this.setState({ comments: comm }));
                    });

                        // TODO: Možda spremit kao comments pa pristupat preko comments.find gdje traži id od epizode
                        // TODO: Komentari se kasno dobavaljaju. Kako to popraviti?
                
            })

        
    }




    render(){
        return <EpisodeComponent episodes = {this.state.episodes} comments = {this.state.comments} showComment = {this.state.showComment}/>
        
    }
}

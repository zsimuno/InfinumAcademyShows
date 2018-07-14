import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class EpisodeComponent extends Component {
    constructor(args){
        super(args);

        this.state = {
            showComment: {}, // showComment[episode._id] tells if the comments should be shown (true) or hidden (false or undefined)
        };

    }


    ShowHideComments(episode) {
        const showComm = Object.assign({}, this.state.showComment);
        showComm[episode._id] = !( showComm[episode._id] ); // !undefined is true
        this.setState({ showComment: showComm });
    }

    render(){
        const { episodes, comments } = this.props;
        return(
            <div>
            <h1><Link to = '/'>Home</Link></h1>
            {episodes.length === 0 ?
            <h2>No episodes available</h2>
            :
            <ul>
            <h2>Episodes: </h2>
            {
                episodes.map((episode) => (
                    <li key={episode._id}>
                        <h3>{episode.title}</h3>

                        <ul>
                            <li key={episode.title}>
                            { // Check if there is a description
                                episode.description.length === 0 ?
                                <p>No description available</p>
                                :
                                episode.description
                            }
                            </li>

                            { // Check if comments should be shown or hidden
                            (this.state.showComment[episode._id] === undefined || this.state.showComment[episode._id] === false) ?
                                <button type = "Button" onClick = {() => this.ShowHideComments(episode)}>
                                    Show comments
                                </button>
                                :
                                <div>
                                    {/* Show the comments for this episode  */}
                                    <li key={`Comments:${episode._id}`}>
                                        <b><i>Comments: </i></b>
                                    </li>
                                    <button type = "Button" onClick = {() => this.ShowHideComments(episode)}>
                                        Hide comments
                                    </button>
                                    <ul>
                                        { // Check if there are any comments
                                        (comments[episode._id] === undefined || comments[episode._id].length === 0) ?
                                            <li>There are no comments yet</li>
                                            :
                                            comments[episode._id].map((comment) =>
                                                <li key={comment._id}>
                                                    {comment.text}  
                                                </li>)
                                        }
                                    </ul>
                                </div>
                            }

                        </ul>
                    </li>
                ))
            }
            </ul>
            }
            </div>
        )
    }
}

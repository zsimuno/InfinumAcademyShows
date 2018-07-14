import React, { Component } from 'react';

export class App extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],    // List of all shows
      episodes: {}, // Episodes of one show are stored in    episodes[show_id]
      info: {},     // Information about one shows stored in info[show_id]
      comments: {}, // Comments of one episode stored in     comments[episode_id]
    };
    this.fetchShows = this.fetchShows.bind(this);
    this.fetchEpisodes = this.fetchEpisodes.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  fetchShows() {
    // Fetch data about shows
    fetch('https://api.infinum.academy/api/shows')
      .then((data) => data.json())
      .then((response) => this.setState({ shows: response.data }))
      .then(() => {  // Fetch info about shows

        const showsD = this.state.shows;

        // Fetch show descritpions 
        for (const key in showsD) {
          fetch(`https://api.infinum.academy/api/shows/${showsD[key]._id}`)
            .then((response) => response.json())
            .then((response) => {
              // Copy to inf variable and then change it and change state.info to inf
              let inf = Object.assign({}, this.state.info);
              inf[showsD[key]._id] = response.data.description;
              this.setState({ info: inf });
            });
        }
      });


  }



  // Fetch comments for one episode
  fetchComments(episode) {
    const comm = Object.assign({}, this.state.comments);
    fetch(`https://api.infinum.academy/api/episodes/${episode._id}/comments`)
      .then((response) => response.json())
      // Add comments of one episode 
      // (this.state.comments[episode._id] should be comments of that episode)
      .then((response) => comm[episode._id] = response.data)
      .then(() => this.setState({ comments: comm }));
  }

  render() {
    return (
      <div>
        { // Show shows if they are fetched otherwise give user a button to fetch
          this.state.shows.length > 0 ?
            <h2>Shows are:</h2>
            :
            <div>
              <h1>Click the button to fetch shows:</h1>
              <button type="button" onClick={this.fetchShows}>
                Fetch shows
            </button>
            </div>
        }
        <ul>
          {
            // List all shows
            this.state.shows.map((show) =>
              <li key={show._id}><h4>{show.title}</h4>
                <ul>
                  {/* Show info about shows */}
                  <li key={show.title}>
                    {
                      this.state.info[show._id] === "" ?
                        <p>No description available</p>
                        :
                        this.state.info[show._id]
                    }
                  </li>
                  {
                    // IF episodes not yet fetched then show a button to fetch them
                    // Otherwise show the episodes but not the button
                    this.state.episodes[show._id] === undefined ?
                      <button onClick={() => this.fetchEpisodes(show._id)} type="button">Show episodes</button>
                      :
                      <div>
                        <li key={`Episodes:${show._id}`}> Episodes: </li>
                        {
                          // First check if there are any episodes
                          this.state.episodes[show._id].length === 0 ?
                            <li>No episodes available</li>
                            :
                            this.state.episodes[show._id].map((episode) =>
                              <li key={episode._id}>
                                {episode.title}
                                <ul>
                                  <li key={episode.title}>
                                    { // Check if there is a description
                                      episode.description.length > 0 ?
                                        episode.description
                                        :
                                        <p>No description available</p>
                                    }
                                  </li>

                                  { // Ask user to show comments and show them
                                    this.state.comments[episode._id] === undefined ?
                                      <button type='button' onClick={() => this.fetchComments(episode)}>
                                        Show comments
                                      </button>
                                      :
                                      <div><li key={`Comments:${episode._id}`}>Comments: </li>
                                        <ul>
                                          { // Check if there are any comments
                                            this.state.comments[episode._id].length === 0 ?
                                              <li>There are not comments yet</li>
                                              :
                                              this.state.comments[episode._id].map((comment) =>
                                                <li key={comment._id}>{comment.text}</li>)
                                          }
                                        </ul>
                                      </div>
                                  }

                                </ul>
                              </li>)
                        }
                      </div>
                  }
                </ul>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

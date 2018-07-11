import React, { Component } from 'react';

export default class App extends Component {
  constructor(args){
    super(args);

    this.state = {
      shows: [],
      episodes: {},
      info: {},
    };
    this.fetchShows    = this.fetchShows.bind(this);
    this.fetchEpisodes = this.fetchEpisodes.bind(this);
  }

  fetchShows(){
    // Fetch data about shows
    fetch('https://api.infinum.academy/api/shows')
	    .then( (data) => data.json() )
      .then( (response) => this.setState({ shows: response.data }) )
      .then(() => 
        {
          const showsD = this.state.shows;

          // Fetch show descritpions 
          for (const key in showsD) {
            fetch(`https://api.infinum.academy/api/shows/${showsD[key]._id}`)
              .then( (response) => response.json() )
              .then( (response) => {
                // Copy to inf variable and then change it and change state.info to inf
                let inf = Object.assign({}, this.state.info);
                inf[showsD[key]._id] = response.data.description;
                this.setState({info: inf});
                
              } );
          }
        });

      
    }

  // Get id of the show you want to fetch episodes of
  fetchEpisodes(id){

    // Copy episodes data so we can change it
    const episodeData = Object.assign({}, this.state.episodes);

    fetch(`https://api.infinum.academy/api/shows/${id}/episodes`)
      .then((response) => response.json())
      .then((response) => {

        // Copy data about all episodes
        let allEpisodes = response.data.slice(0);

        // For each episode fetch its comments
        for (const i in allEpisodes) {
          
            fetch(`https://api.infinum.academy/api/episodes/${allEpisodes[i]._id}/comments`)
            .then((response) => response.json())
             // Add comments key and value to each episode
            .then((response) => allEpisodes[i]['comments'] = response.data)
             // Copy previous episodes value to episodeData and then update with new data
            .then(() => episodeData[id]   = allEpisodes);
        }  
      })
      // Update episodes data
      .then(() => this.setState({episodes: episodeData}));
    
  }

  // Show comments on page if they exist
  renderComments(episode){
    if (episode.comments !== undefined) {
      return <div><li>Comments: </li> <ul>{episode.comments.map((comment) => <li key = {comment._id}>{comment.text}</li>)}</ul> </div>;
    }
  }

  render() {
    return (
      <div>
        {
          this.state.shows.length > 0 ? 
          <h2>Shows are:</h2>
          :
          <button type = "button" onClick = {this.fetchShows}>
           Fetch shows
          </button>
        }
        <ul>
          {
            // List all shows
            this.state.shows.map((show) => 
              <li key = {show._id}><h4>{show.title}</h4>
                <ul>
                  
                  <li key = {show.title}> { this.state.info[show._id] } </li>
                  {
                    // IF episodes not yet fetched then show a button to fetch them
                    // Otherwise show the episodes but not the button
                    this.state.episodes[show._id] === undefined ?
                      <button onClick = {() => this.fetchEpisodes(show._id)} type = "button">Fetch episodes</button>
                      :
                      <div>
                        <li> Episodes: </li>
                        {
                          // For each episode list its title, description and comments
                          this.state.episodes[show._id].map((episode) => 
                            <li key = {episode._id}>
                              {episode.title}
                              <ul>
                                <li key = {episode.title}>{episode.description}</li>
                                {this.renderComments(episode)}                        
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

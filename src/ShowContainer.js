import React, { Component } from 'react';

import { ShowComponent } from './ShowComponent';

export class ShowContainer extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],
      descriptions: {},
    };
  }

  componentDidMount() {
    fetch('https://api.infinum.academy/api/shows')
      .then((data) => data.json())
      .then((response) => this.setState({ shows: response.data }))
      .then(() => {

        // Fetch show descriptions 
        this.state.shows.forEach((show) => {
          fetch(`https://api.infinum.academy/api/shows/${show._id}`)
            .then((response) => response.json())
            .then((response) =>
              this.setState({ descriptions: Object.assign({}, this.state.descriptions, { [show._id]: response.data.description }) })
            );
        });
      });
  }


  render() {
    return <ShowComponent shows={this.state.shows} descriptions={this.state.descriptions} />
  }
}

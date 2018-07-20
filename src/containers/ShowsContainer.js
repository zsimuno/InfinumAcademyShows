import React, { Component } from 'react';

import { ShowsComponent } from '../components/ShowsComponent';
import { observer } from 'mobx-react';

@observer
export class ShowsContainer extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    fetch('https://api.infinum.academy/api/shows')
      .then((data) => data.json())
      .then((response) => this.setState({ shows: response.data }));
  }


  render() {
    return <ShowsComponent shows={this.state.shows} />
  }
}

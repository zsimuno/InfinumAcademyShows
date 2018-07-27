import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { getAll as getAllShows } from '../services/show';

import { ShowsComponent } from '../components/ShowsComponent';

@inject("state")
@observer
export class ShowsContainer extends Component {

  @action
  componentDidMount() {
    getAllShows(this.props.state);
  }


  render() {
    return <ShowsComponent
      shows={this.props.state.shows}

      username={this.props.state.getUsername}
      logout={this.props.state._logout}
    />
  }
}

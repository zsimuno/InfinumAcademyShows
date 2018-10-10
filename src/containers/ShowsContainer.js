import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { getAll as getAllShows } from '../services/show';
import { logout } from '../services/user';

import { ShowsComponent } from '../components/ShowsComponent';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';


@inject("state")
@observer
export class ShowsContainer extends Component {

  @action
  componentDidMount() {
    getAllShows(this.props.state);
  }

  render() {
    return (
      <div>
        <HeaderComponent
          username={this.props.state.getUsername}
          logout={() => logout(this.props.state)}
        />
        <ShowsComponent
          allShows={this.props.state.shows}
          favoriteShows={this.props.state.getFavoriteShows}
        />
        <FooterComponent />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { getAll as getAllShows } from '../services/show';

import { ShowsComponent } from '../components/ShowsComponent';

const state = {
  @observable
  shows: [],
};

@observer
export class ShowsContainer extends Component {

  componentDidMount() {
    getAllShows(state);
  }


  render() {
    return <ShowsComponent shows={state.shows} />
  }
}

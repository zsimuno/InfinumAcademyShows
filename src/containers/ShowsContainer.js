import React, { Component } from 'react';
import { observer } from 'mobx-react';
import state from '../state';
import { getAll as getAllShows } from '../services/show';

import { ShowsComponent } from '../components/ShowsComponent';


@observer
export class ShowsContainer extends Component {

  componentDidMount() {
    getAllShows(state);
  }


  render() {
    return <ShowsComponent shows={state.shows} />
  }
}

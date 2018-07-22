import { observable } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  showInfo = {};

  @observable
  episodes = [];

  @observable
  errorMessage = null;
}

export default new State();

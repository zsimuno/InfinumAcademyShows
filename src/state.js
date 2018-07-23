import { observable, computed } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  showInfo = {};

  @observable
  episodes = [];

  @observable
  errorMessage = null;

  @computed
  get userToken(){
    return localStorage.token;
  }

  @observable
  episodeInformation = {};

  @observable
  episodeComments = [];
}

export default new State();

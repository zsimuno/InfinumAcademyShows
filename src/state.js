import { observable, computed } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  showInfo = {};

  @observable
  episodes = [];

  @observable
  likesCount = 0;

  @observable
  errorMessage = null;

  @observable
  username = '';

  @observable
  token = '';

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

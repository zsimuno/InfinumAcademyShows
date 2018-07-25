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
    return this.token || localStorage.getItem('token');
  }

  @computed
  get getUsername(){
    return this.username || localStorage.getItem('user');
  }

  @observable
  episodeInformation = {};

  @observable
  episodeComments = [];
}

export default new State();

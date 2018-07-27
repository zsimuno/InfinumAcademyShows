import { observable, computed, action } from 'mobx';

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
    return this.token || sessionStorage.getItem('token') || localStorage.getItem('token');
  }

  @computed
  get getUsername(){
    return this.username || sessionStorage.getItem('user') || localStorage.getItem('user');
  }

  @action.bound
  _logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.username = null;
    this.token = null;
}

  @observable
  episodeInformation = {};

  @observable
  episodeComments = [];
}

export default new State();

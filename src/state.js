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
  get userToken() {
    return this.token || sessionStorage.getItem('token') || localStorage.getItem('token');
  }

  @computed
  get getUsername() {
    return this.username || sessionStorage.getItem('user') || localStorage.getItem('user');
  }

  @computed
  get getFavoriteShows() {

    if (this.getUsername &&
      localStorage.getItem('favoriteShows') &&
      JSON.parse(localStorage.getItem('favoriteShows'))[this.getUsername]) {
      return JSON.parse(localStorage.getItem('favoriteShows'))[this.getUsername];
    }
    else {
      return [];
    }
  }

  @observable
  episodeInformation = {};

  @observable
  episodeComments = [];

  @observable
  mediaData = [];
}

export default new State();

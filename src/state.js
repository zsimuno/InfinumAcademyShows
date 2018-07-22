import { observable } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  showInfo = {};

  @observable
  loadingStates = {
    shows: false,
  };

  @observable
  episodes = [];

  @observable
  episodeInfo = [];

  @observable
  episodeComments = [];

  @observable
  errorMessage = null;

  @observable
  loginUsername = '';

  @observable
  loginPassword = '';

  @observable
  registerUsername = '';

  @observable
  registerPassword = '';

  @observable
  isInputPassword = true;

  @observable
  loginData = {};

  @observable
  registerData = {};
}

export default new State();

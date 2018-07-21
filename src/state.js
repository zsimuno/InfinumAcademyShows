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
  username = '';

  @observable 
  password = '';

  @observable 
  isInputPassword = true;

  @observable 
  loginData = {};

  @observable 
  registerData = {};
}

export default new State();

import { post } from './api';
import { runInAction } from 'mobx';

export async function login(state, username, pass) {
    const loginData = await post('users/sessions', null, { email: username, password: pass });
    runInAction(() => state.loginData = loginData);
}

export async function register(state, username, pass) {
    const registerData = await post('users', null, { email: username, password: pass });
    runInAction(() => state.registerData = registerData);
}

export async function logout(state) {
    localStorage.clear();
    sessionStorage.clear();
    runInAction(() => {
        state.username = null;
        state.token = null;
    });
}
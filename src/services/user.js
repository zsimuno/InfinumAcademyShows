import { post } from './api';
import { runInAction } from 'mobx';

export async function login(state, username, pass) {
    const loginData = await post('users/sessions', { email: username, password: pass });
    runInAction(() => state.loginData = loginData);
}

export async function register(state, username, pass) {
    const registerData = await post('users', { email: username, password: pass });
    runInAction(() => state.registerData = registerData);
}

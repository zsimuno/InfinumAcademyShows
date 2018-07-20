import { post } from './api';

export async function login(state, username, pass) {
    const loginData = await post('users/sessions', {email: username, password: pass});
    state.loginData.replace(loginData);
}

export async function register(state, username, pass) {
    const registerData = await post('users/', {email: username, password: pass});
    state.registerData.replace(registerData);
}

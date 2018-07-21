import { post } from './api';

export async function login(state, username, pass) {
    const loginData = await post('users/sessions', {email: username, password: pass});
    console.log(loginData);
    Object.assign(state.loginData, loginData);
}

export async function register(state, username, pass) {
    const registerData = await post('users', {email: username, password: pass});
    Object.assign(state.registerData, registerData);
}

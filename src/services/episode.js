import { get, userPost } from './api';
import { runInAction } from 'mobx';

export async function getInfo(episodeId) {
    const episodeInfo = await get(`episodes/${episodeId}`)
    return episodeInfo;
}

export async function getComments(state, episodeId) {
    const episodeComments = await get(`episodes/${episodeId}/comments`)
    runInAction(() => state.episodeComments.replace(episodeComments));
}


export async function add(state, episodeData) {
    const episodeInfo = await userPost('episodes', episodeData);
    episodeInfo.data && runInAction(() => state.episodes.push(episodeInfo.data));
}

export async function addComment(state, text, episodeId) {
    const commentInfo = await userPost('comments', {text: text, episodeId: episodeId});
    console.log(commentInfo);
    commentInfo.data && runInAction(() => state.episodeComments.push(commentInfo.data));
}
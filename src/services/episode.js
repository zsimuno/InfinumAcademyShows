import { get, post, apiDelete } from './api';
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
    const episodeInfo = await post('episodes', state.userToken, episodeData);
    episodeInfo && runInAction(() => state.episodes.push(episodeInfo));
}

export async function addComment(state, text, episodeId) {
    const commentInfo = await post('comments', state.userToken, { text: text, episodeId: episodeId });
    commentInfo && runInAction(() => state.episodeComments.push(commentInfo));
}

export async function deleteComment(state, commentId) {
    await apiDelete(`comments/${commentId}`, state.userToken);
    runInAction(() => state.episodeComments = state.episodeComments.filter((comment) => comment._id !== commentId));
}
import { get } from './api';

export async function getInfo(episodeId) {
    const episodeInfo = await get(`episodes/${episodeId}`)
    return episodeInfo;
}

export async function getComments(state, episodeId) {
    const episodeComments = await get(`episodes/${episodeId}/comments`)
    state.episodeComments.replace(episodeComments);
}
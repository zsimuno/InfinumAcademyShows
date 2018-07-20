import { get } from './api';

export async function getInfo(state, episodeId){
    const episodeInfo = await get(`episodes/${episodeId}`)
    state.episodeInfo.replace(episodeInfo);
}

export async function getComments(state, episodeId){
    const episodeComments = await get(`episodes/${episodeId}/comments`)
    state.episodeComments.replace(episodeComments);
}
import { get } from './api';

export async function getAll(state) {
  state.loadingStates.shows = true;
  const shows = await get('shows');
  state.shows.replace(shows);
  state.loadingStates.shows = false;
}

export async function getInfo(state, showId) {
  const showInfo = await get(`shows/${showId}`);
  state.showInfo = showInfo;
}


export async function getAllEpisodes(state, showId) {
  const allEpisodes = await get(`shows/${showId}/episodes`);
  state.episodes.replace(allEpisodes);
}
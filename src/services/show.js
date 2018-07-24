import { get } from './api';
import { getInfo as getEpisodeInfo } from './episode.js';
import { runInAction } from 'mobx';

export async function getAll(state) {
  const shows = await get('shows');
  runInAction(() => state.shows.replace(shows));
}

export async function getInfo(state, showId) {
  const showInfo = await get(`shows/${showId}`);
  runInAction(() => state.showInfo = showInfo);
}


export async function getAllEpisodes(state, showId) {
  const allEpisodes = await get(`shows/${showId}/episodes`);
  runInAction(() => {
    state.episodes.replace([]);
    allEpisodes.forEach((episode) => {
      getEpisodeInfo(episode._id).then((res) => runInAction(() => state.episodes.push(res)));
    });
  });
}
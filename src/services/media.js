import { post } from './api';
import { runInAction } from "../../node_modules/mobx";

export async function uploadFile(state ,data) {
    const mediaData = await post('media', state.userToken, data);
    runInAction(() => state.mediaData = mediaData);
  }
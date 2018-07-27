import { post } from './api';
import { runInAction } from "../../node_modules/mobx";

export async function uploadFile(state ,data) {
    const mediaData = await post('media', state.userToken, data);
    console.log(mediaData);
    // runInAction(() => state.mediaData.replace(mediaData));
  }
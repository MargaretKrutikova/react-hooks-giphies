import { AppState } from "state"

const getFavoriteGifIds = (state: AppState) => state.favorites.gifIds
const getFavoriteGifs = (state: AppState) => state.favorites.data
const getIsFavoriteGif = (state: AppState, gifId: string): boolean =>
  state.favorites.gifIds.indexOf(gifId) > -1

export default { getFavoriteGifIds, getFavoriteGifs, getIsFavoriteGif }

import { AppState } from "state"

const getIsFavoriteGif = (state: AppState, gifId: string): boolean =>
  state.favorites.gifIds.indexOf(gifId) > -1

export default { getIsFavoriteGif }

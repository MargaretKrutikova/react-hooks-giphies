import { AppState } from "state"

const getIsFavoriteGif = (state: AppState, gifId: string): boolean =>
  state.user.favoriteGifIds.indexOf(gifId) > -1

export default { getIsFavoriteGif }

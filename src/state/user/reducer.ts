import { UserAction, TOGGLE_FAVORITE_GIF } from "./actions"

export type UserState = {
  favoriteGifIds: string[]
}

export const initialState: UserState = {
  favoriteGifIds: []
}

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_GIF: {
      const { favoriteGifIds } = state
      const isFavorite = favoriteGifIds.indexOf(action.gifId) > -1

      const favorites = isFavorite
        ? favoriteGifIds.filter(gifId => gifId !== action.gifId)
        : [...favoriteGifIds, action.gifId]

      return { ...state, favoriteGifIds: favorites }
    }
    default:
      return state
  }
}

export default userReducer

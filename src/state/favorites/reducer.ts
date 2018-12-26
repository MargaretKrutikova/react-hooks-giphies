import {
  FavoriteGifsAction,
  TOGGLE_FAVORITE_GIF,
  FETCH_FAVORITE_GIFS,
  SET_FAVORITE_GIFS,
  ERROR_FAVORITE_GIFS
} from "./actions"
import { Gif } from "types/gif"

export type FavoriteGifsState = {
  readonly gifIds: string[]
  readonly fetching: boolean
  readonly error: string | null
  readonly limit: number
  readonly data: Gif[]
}

export const initialState: FavoriteGifsState = {
  data: [],
  fetching: false,
  gifIds: [],
  error: null,
  limit: 6
}

const favoriteGifsReducer = (
  state: FavoriteGifsState = initialState,
  action: FavoriteGifsAction
): FavoriteGifsState => {
  switch (action.type) {
    case TOGGLE_FAVORITE_GIF: {
      const { gifIds: ids } = state
      const isFavorite = ids.indexOf(action.gifId) > -1

      const updatedIds = isFavorite
        ? ids.filter(gifId => gifId !== action.gifId)
        : [...ids, action.gifId]

      return { ...state, gifIds: updatedIds }
    }

    case FETCH_FAVORITE_GIFS:
      return { ...state, fetching: true, error: null }

    case SET_FAVORITE_GIFS:
      return { ...state, fetching: false, error: null, data: action.data }

    case ERROR_FAVORITE_GIFS:
      return { ...state, fetching: false, error: action.error }

    default:
      return state
  }
}

export default favoriteGifsReducer

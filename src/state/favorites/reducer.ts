import {
  FavoriteGifsAction,
  ADD_TO_FAVORITE,
  LOAD_FAVORITE_GIF_IDS,
  REMOVE_FROM_FAVORITE,
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
    case ADD_TO_FAVORITE:
      return {
        ...state,
        gifIds: [...state.gifIds, action.gifId]
      }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        gifIds: state.gifIds.filter(id => id !== action.gifId)
      }

    case FETCH_FAVORITE_GIFS:
      return { ...state, fetching: true, error: null }

    case SET_FAVORITE_GIFS:
      return { ...state, fetching: false, error: null, data: action.data }

    case ERROR_FAVORITE_GIFS:
      return { ...state, fetching: false, error: action.error }

    case LOAD_FAVORITE_GIF_IDS:
      return { ...state, gifIds: action.ids }

    default:
      return state
  }
}

export default favoriteGifsReducer

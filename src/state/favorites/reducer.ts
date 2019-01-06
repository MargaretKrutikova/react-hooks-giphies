import { getType } from "typesafe-actions"

import actions, { FavoriteGifsAction } from "./actions"
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
    case getType(actions.addGifToFavorite):
      return {
        ...state,
        gifIds: [...state.gifIds, action.payload.gifId]
      }

    case getType(actions.removeGifFromFavorite):
      return {
        ...state,
        gifIds: state.gifIds.filter(id => id !== action.payload.gifId)
      }

    case getType(actions.fetchFavoriteGifs):
      return { ...state, fetching: true, error: null }

    case getType(actions.setFavoriteGifs):
      return { ...state, fetching: false, error: null, data: action.payload }

    case getType(actions.setFavoriteGifsError):
      return { ...state, fetching: false, error: action.payload }

    case getType(actions.loadFavoriteGifIds):
      return { ...state, gifIds: action.payload }

    default:
      return state
  }
}

export default favoriteGifsReducer

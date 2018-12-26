import { ReducersMap } from "types/reducer"
import { combineReducers } from "utils/reducer"

import { GifsState, gifsReducer, gifsInitState, GifsAction } from "./gifs"
import {
  favoriteGifsReducer,
  favoriteGifsInitState,
  FavoriteGifsState,
  FavoriteGifsAction
} from "./favorites"

export type AppState = {
  gifs: GifsState
  favorites: FavoriteGifsState
}

export type AppAction = GifsAction | FavoriteGifsAction

export const appInitState: AppState = {
  gifs: gifsInitState,
  favorites: favoriteGifsInitState
}

const reducersMap: ReducersMap<AppState> = {
  gifs: gifsReducer,
  favorites: favoriteGifsReducer
}

export default combineReducers(reducersMap)

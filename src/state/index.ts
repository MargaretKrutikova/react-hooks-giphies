import { ReducersMap } from "types/reducer"
import { combineReducers } from "utils/reducer"

import { GifsState, gifsReducer, gifsInitState, GifsAction } from "./gifs"
import {
  favoriteGifsReducer,
  favoriteGifsInitState,
  FavoriteGifsState,
  FavoriteGifsAction
} from "./favorites"
import {
  NotificationState,
  notificationsReducer,
  notificationsInitState,
  NotificationAction
} from "./notifications"

export type AppState = {
  gifs: GifsState
  favorites: FavoriteGifsState
  notifications: NotificationState
}

export type AppAction = GifsAction | FavoriteGifsAction | NotificationAction

export const appInitState: AppState = {
  gifs: gifsInitState,
  favorites: favoriteGifsInitState,
  notifications: notificationsInitState
}

const reducersMap: ReducersMap<AppState> = {
  gifs: gifsReducer,
  favorites: favoriteGifsReducer,
  notifications: notificationsReducer
}

export default combineReducers(reducersMap)

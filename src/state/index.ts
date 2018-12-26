import { ReducersMap } from "types/reducer"
import { combineReducers } from "utils/reducer"

import { GifsState, gifsReducer, gifsInitState, GifsAction } from "./gifs"
import { UserState, userReducer, userInitState, UserAction } from "./user"

export type AppState = {
  gifs: GifsState
  user: UserState
}

export type AppAction = GifsAction | UserAction

export const appInitState: AppState = {
  gifs: gifsInitState,
  user: userInitState
}

const reducersMap: ReducersMap<AppState> = {
  gifs: gifsReducer,
  user: userReducer
}

export default combineReducers(reducersMap)

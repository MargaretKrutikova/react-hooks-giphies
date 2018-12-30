import { FavoriteGifsState } from "./reducer"
import { FavoriteGifsAction } from "./actions"

export {
  default as favoriteGifsReducer,
  initialState as favoriteGifsInitState
} from "./reducer"
export { default as favoriteGifsActions } from "./actions"
export { default as favoriteGifsEffects } from "./effects"
export { default as favoriteGifsSelectors } from "./selectors"

export type FavoriteGifsState = FavoriteGifsState
export type FavoriteGifsAction = FavoriteGifsAction

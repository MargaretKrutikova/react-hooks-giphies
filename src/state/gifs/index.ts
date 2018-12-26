import { GifsState } from "./reducer"
import { GifsAction } from "./actions"

export {
  default as gifsReducer,
  initialState as gifsInitState
} from "./reducer"
export { default as gifsActions } from "./actions"
export { default as gifsEffects } from "./effects"
export { default as gifsSelectors } from "./selectors"

export type GifsState = GifsState
export type GifsAction = GifsAction

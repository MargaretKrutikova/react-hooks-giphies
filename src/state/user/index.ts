import { UserState } from "./reducer"
import { UserAction } from "./actions"

export {
  default as userReducer,
  initialState as userInitState
} from "./reducer"
export { default as userActions } from "./actions"
export { default as userSelectors } from "./selectors"

export type UserState = UserState
export type UserAction = UserAction

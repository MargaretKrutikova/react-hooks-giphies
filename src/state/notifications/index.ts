import { NotificationAction } from "./actions"
import { NotificationState } from "./reducer"

export { default as notificationsActions } from "./actions"
export {
  default as notificationsReducer,
  initialState as notificationsInitState
} from "./reducer"

export type NotificationState = NotificationState
export type NotificationAction = NotificationAction

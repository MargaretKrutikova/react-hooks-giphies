import { createAction, ActionType } from "typesafe-actions"
import { NotificationProps } from "types/notification"

const queue = createAction(
  "notifications/QUEUE",
  resolve => (props: NotificationProps) =>
    resolve({
      notification: {
        isOpen: false,
        id: Math.ceil(Math.random() * 1000000),
        ...props
      }
    })
)

const remove = createAction(
  "notifications/REMOVE",
  resolve => (notificationId: number) => resolve({ id: notificationId })
)

const show = createAction(
  "notifications/SHOW",
  resolve => (notificationId: number) => resolve({ id: notificationId })
)
const hide = createAction(
  "notifications/HIDE",
  resolve => (notificationId: number) => resolve({ id: notificationId })
)

const actions = { queue, remove, show, hide }

export type NotificationAction = ActionType<typeof actions>
export default actions

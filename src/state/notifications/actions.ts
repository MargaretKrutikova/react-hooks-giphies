import { Notification, NotificationProps } from "types/notification"

const QUEUE_NOTIFICATION = "notifications/QUEUE"
const REMOVE_NOTIFICATION = "notifications/REMOVE"

const SHOW_NOTIFICATION = "notifications/SHOW"
const HIDE_NOTIFICATION = "notifications/HIDE"

type QueueNotificationAction = {
  type: typeof QUEUE_NOTIFICATION
  notification: Notification
}

type RemoveNotificationAction = {
  type: typeof REMOVE_NOTIFICATION
  id: number
}

type ShowNotificationAction = {
  type: typeof SHOW_NOTIFICATION
  id: number
}

type HideNotificationAction = {
  type: typeof HIDE_NOTIFICATION
  id: number
}

type NotificationAction =
  | QueueNotificationAction
  | RemoveNotificationAction
  | ShowNotificationAction
  | HideNotificationAction

const queue = (props: NotificationProps): QueueNotificationAction => ({
  type: QUEUE_NOTIFICATION,
  notification: {
    isOpen: false,
    id: Math.ceil(Math.random() * 1000000),
    ...props
  }
})

const remove = (notificationId: number): RemoveNotificationAction => ({
  type: REMOVE_NOTIFICATION,
  id: notificationId
})

const show = (notificationId: number): ShowNotificationAction => ({
  type: SHOW_NOTIFICATION,
  id: notificationId
})

const hide = (notificationId: number): HideNotificationAction => ({
  type: HIDE_NOTIFICATION,
  id: notificationId
})

export {
  QUEUE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationAction
}
export default { queue, remove, show, hide }

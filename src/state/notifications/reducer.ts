import {
  QUEUE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  NotificationAction
} from "./actions"
import { Notification } from "types/notification"

export type NotificationState = {
  data: Notification[]
}

export const initialState: NotificationState = {
  data: []
}

const setIsOpen = (data: Notification[], id: number, isOpen: boolean) =>
  data.map(item => (item.id === id ? { ...item, isOpen } : item))

const reducer = (
  state: NotificationState = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case QUEUE_NOTIFICATION: {
      const data = [...state.data, action.notification]
      return { ...state, data }
    }

    case REMOVE_NOTIFICATION: {
      const data = state.data.filter(item => item.id !== action.id)
      return { ...state, data }
    }

    case SHOW_NOTIFICATION:
      return { ...state, data: setIsOpen(state.data, action.id, true) }

    case HIDE_NOTIFICATION:
      return { ...state, data: setIsOpen(state.data, action.id, false) }

    default:
      return state
  }
}

export default reducer

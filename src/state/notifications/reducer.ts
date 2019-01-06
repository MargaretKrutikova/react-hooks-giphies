import actions, { NotificationAction } from "./actions"
import { Notification } from "types/notification"
import { getType } from "typesafe-actions"

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
    case getType(actions.queue): {
      const data = [...state.data, action.payload.notification]
      return { ...state, data }
    }

    case getType(actions.remove): {
      const data = state.data.filter(item => item.id !== action.payload.id)
      return { ...state, data }
    }

    case getType(actions.show):
      return { ...state, data: setIsOpen(state.data, action.payload.id, true) }

    case getType(actions.hide):
      return { ...state, data: setIsOpen(state.data, action.payload.id, false) }

    default:
      return state
  }
}

export default reducer

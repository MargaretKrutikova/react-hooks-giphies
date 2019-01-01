import * as React from "react"
import { useCallback, useMemo } from "react"

import useAppDispatch from "hooks/useAppDispatch"
import useAppState from "hooks/useAppState"
import { notificationsActions } from "state/notifications"

import Notifications from "./Notifications"

const NotificationsProvider: React.FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch()
  const appState = useAppState()

  const notifications = appState.notifications.data

  const remove = useCallback(
    (id: number) => dispatch(notificationsActions.remove(id)),
    [dispatch]
  )

  const show = useCallback(
    (id: number) => dispatch(notificationsActions.show(id)),
    [dispatch]
  )

  const hide = useCallback(
    (id: number) => dispatch(notificationsActions.hide(id)),
    [dispatch]
  )

  return useMemo(
    () => (
      <Notifications
        notifications={notifications}
        remove={remove}
        show={show}
        hide={hide}
      />
    ),
    [notifications, remove, show, hide]
  )
}

export default NotificationsProvider

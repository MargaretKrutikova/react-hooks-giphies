import * as React from "react"
import { useEffect } from "react"
import styled from "@emotion/styled"

import { Notification } from "types/notification"

import IconButton from "components/IconButton"
import CloseIcon from "components/icons/CloseIcon"

const TRANSITION_MS = 500
const AUTO_CLOSE_MS = 2000

const NotificationTransition = styled.div<{
  isOpen: boolean
  position: number
}>(({ isOpen, position }) => ({
  opacity: isOpen ? 1 : 0,
  transition: "all .5s ease-out",
  padding: "10px 15px",
  color: "#fff",
  backgroundColor: "#1976d2",
  position: "absolute",
  top: 0,
  right: 0,
  transform: `translate(0px, ${80 * position}px)`,
  maxWidth: 350,
  borderRadius: 4,
  display: "flex",
  alignItems: "center"
}))

const NotificationCloseIcon = styled(CloseIcon)({
  fill: "#fff"
})

export type DispatchProps = {
  remove: (id: number) => void
  show: (id: number) => void
  hide: (id: number) => void
}

type Props = Notification &
  DispatchProps & {
    position: number
  }

const Notification: React.FunctionComponent<Props> = ({
  id,
  remove,
  show,
  hide,
  position,
  isOpen,
  message
}) => {
  useEffect(
    () => {
      show(id)
    },
    [id]
  )

  useEffect(
    () => {
      if (!isOpen) {
        const removeTimerId = setTimeout(() => remove(id), TRANSITION_MS)
        return () => clearTimeout(removeTimerId)
      }

      const hideTimerId = setTimeout(() => hide(id), AUTO_CLOSE_MS)
      return () => clearTimeout(hideTimerId)
    },
    [id, isOpen]
  )

  return (
    <NotificationTransition isOpen={isOpen} position={position}>
      {message}
      <IconButton onClick={() => hide(id)}>
        <NotificationCloseIcon />
      </IconButton>
    </NotificationTransition>
  )
}

export default Notification

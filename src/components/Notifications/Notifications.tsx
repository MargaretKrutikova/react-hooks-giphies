import * as React from "react"
import styled from "@emotion/styled"

import Notification, { DispatchProps } from "./Notification"
import { Notification as NotificationType } from "types/notification"

const FixedContainer = styled.div({
  position: "fixed",
  width: "100%",
  top: 30,
  right: 20
})

const InnerContainer = styled.div({
  position: "relative"
})

type Props = {
  notifications: NotificationType[]
} & DispatchProps

const Notifications: React.FunctionComponent<Props> = ({
  notifications,
  remove,
  show,
  hide
}) => (
  <FixedContainer>
    <InnerContainer>
      {notifications.map((item, index) => (
        <Notification
          key={item.id}
          remove={remove}
          show={show}
          hide={hide}
          position={index}
          {...item}
        />
      ))}
    </InnerContainer>
  </FixedContainer>
)

export default Notifications

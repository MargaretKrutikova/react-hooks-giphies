import * as React from "react"
import styled from "@emotion/styled"

const IconContainer = styled.button({
  borderRadius: "50%",
  padding: 6,
  display: "flex",
  border: 0,
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "background-color .2s ease-out",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  ":focus": {
    outline: "none"
  }
})

type Props = React.HTMLAttributes<HTMLButtonElement>

const IconButton: React.FunctionComponent<Props> = props => (
  <IconContainer {...props} />
)

export default IconButton

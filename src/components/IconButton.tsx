import * as React from "react"
import styled from "@emotion/styled"

import ButtonBase from "./BaseButton"

const StyledIconButton = styled(ButtonBase)({
  borderRadius: "50%",
  padding: 3,
  display: "flex",
  backgroundColor: "transparent",
  color: "#fff",
  ":hover:enabled": {
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  }
})

type Props = React.HTMLAttributes<HTMLButtonElement>

const IconButton: React.FunctionComponent<Props> = props => (
  <StyledIconButton {...props} />
)

export default IconButton

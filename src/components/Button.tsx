import * as React from "react"
import styled from "@emotion/styled"
import ButtonBase from "./BaseButton"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled(ButtonBase)<Props>({
  padding: 10,
  backgroundColor: "#4554a0",
  color: "#fff",
  minWidth: 100,
  borderRadius: 4,
  ":hover:enabled": {
    backgroundColor: "#36417d"
  },
  ":disabled": {
    color: "#a6aed9"
  }
})

const Button: React.FunctionComponent<Props> = props => (
  <StyledButton {...props} />
)

export default Button

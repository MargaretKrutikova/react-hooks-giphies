import * as React from "react"
import styled from "@emotion/styled"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<Props>({
  border: 0,
  outline: "none",
  textTransform: "uppercase",
  transition: "background-color .2s ease-out",
  ":enabled": {
    cursor: "pointer"
  },
  ":disabled": {
    opacity: 0.7
  }
})

const ButtonBase: React.FunctionComponent<Props> = props => (
  <StyledButton {...props} />
)

export default ButtonBase

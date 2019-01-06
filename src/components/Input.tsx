import * as React from "react"
import styled from "@emotion/styled"

const StyledInput = styled.input({
  width: "100%",
  border: 0,
  margin: 0,
  padding: "7px 0 7px",
  display: "block",
  minWidth: 0,
  position: "relative",
  background: "none",
  fontSize: "inherit",
  fontFamily: '"Montserrat", sans-serif',
  WebkitTapHighlightColor: "transparent",
  ":focus": {
    outline: 0
  }
})

const InputWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  position: "relative",
  ":before": {
    left: 0,
    right: 0,
    bottom: 0,
    content: '""',
    position: "absolute",
    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderBottom: "1px solid #1976d2",
    pointerEvents: "none"
  },
  ":hover:before, :focus:before": {
    borderWidth: 2
  }
})

type Props = {
  icon?: React.ReactNode
} & React.HTMLProps<HTMLInputElement>

const Input: React.FunctionComponent<Props> = ({
  className,
  icon,
  ...rest
}) => (
  <InputWrapper className={className}>
    <StyledInput {...rest} spellCheck={false} />
    {icon}
  </InputWrapper>
)

export default Input

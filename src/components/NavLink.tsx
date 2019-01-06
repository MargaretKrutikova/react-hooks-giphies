import * as React from "react"
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom"
import styled from "@emotion/styled"

const StyledNavLink = styled(RouterNavLink)({
  color: "white",
  fontSize: "1.1em",
  textTransform: "uppercase",
  "& + &": {
    marginLeft: 20
  },
  "&.active": {
    fontWeight: "bold"
  }
})

type Props = NavLinkProps

const NavLink: React.FunctionComponent<Props> = ({ isActive, ...rest }) => (
  <StyledNavLink {...rest} />
)

export default NavLink

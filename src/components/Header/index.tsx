import * as React from "react"
import styled from "@emotion/styled"

import NavLink from "components/NavLink"
import media from "utils/media"
import AppLogo from "./AppLogo"

const StyledHeader = styled.header({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#222",
  padding: "20px 40px",
  color: "white",
  [media.phoneOnly]: {
    padding: "10px 20px 20px"
  }
})

const HeaderContainer = styled.div({
  display: "flex",
  alignItems: "baseline",
  justifyContent: "space-between",
  [media.tabletPortraitAndSmaller]: {
    flexDirection: "column"
  }
})

const Nav = styled.div({
  display: "flex",
  marginRight: 50,
  [media.tabletPortraitAndSmaller]: {
    order: 2
  },
  [media.phoneOnly]: {
    fontSize: 12
  }
})

const AppTitle = styled.h1({
  marginRight: "auto",
  [media.phoneOnly]: {
    fontSize: 22
  }
})

const AppLogoWrapper = styled.div({
  alignSelf: "center"
})

const Header = () => (
  <StyledHeader>
    <HeaderContainer>
      <Nav>
        <NavLink exact to="/">
          Search
        </NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </Nav>
      <AppTitle className="App-title">Welcome to Gif finder</AppTitle>
    </HeaderContainer>

    <AppLogoWrapper>
      <AppLogo alt="logo" />
    </AppLogoWrapper>
  </StyledHeader>
)

export default Header

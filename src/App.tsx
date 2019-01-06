import * as React from "react"
import { StateInspector } from "reinspect"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from "@emotion/styled"

import StateProvider, { APP_STATE_INSPECTOR_ID } from "StateProvider"

import GifSearch from "components/GifSearch"
import FavoriteGifs from "components/FavoriteGifs"
import NotificationsProvider from "components/Notifications"
import NavLink from "components/NavLink"
import Logo from "components/icons/Logo"

const Main = styled.main({
  maxWidth: 1440,
  paddingTop: 30,
  margin: "0 auto"
})

const Header = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#222",
  padding: "20px 40px",
  color: "white"
})

const Nav = styled.div({
  display: "flex",
  alignSelf: "baseline"
})

const AppTitle = styled.h1({
  alignSelf: "baseline",
  marginRight: "auto",
  marginLeft: 50
})

const AppLogo = styled(Logo)({
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  animation: "App-logo-spin infinite 20s linear",
  height: 80
})

const App: React.FunctionComponent = () => (
  <StateInspector name={APP_STATE_INSPECTOR_ID}>
    <StateProvider>
      <BrowserRouter>
        <>
          <Header className="App-header">
            <Nav>
              <NavLink exact to="/">
                Search
              </NavLink>
              <NavLink to="/favorites">Favorites</NavLink>
            </Nav>
            <AppTitle className="App-title">Welcome to Gif finder</AppTitle>
            <AppLogo alt="logo" />
          </Header>

          <Main>
            <Switch>
              <Route path="/" exact component={GifSearch} />
              <Route path="/favorites" exact component={FavoriteGifs} />
            </Switch>
          </Main>
          <NotificationsProvider />
        </>
      </BrowserRouter>
    </StateProvider>
  </StateInspector>
)

export default App

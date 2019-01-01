import * as React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import styled from "@emotion/styled"

import StateProvider, { APP_STATE_INSPECTOR_ID } from "StateProvider"

import GifSearch from "components/GifSearch"
import FavoriteGifs from "components/FavoriteGifs"
import "./App.css"
import logo from "./logo.svg"
import { StateInspector } from "reinspect"
import NotificationsProvider from "components/Notifications"

const Main = styled.main({
  maxWidth: 1440,
  margin: "0 auto"
})

const App: React.FunctionComponent = () => (
  <StateInspector name={APP_STATE_INSPECTOR_ID}>
    <StateProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Gif finder</h1>
          </header>
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>

          <Main>
            <Switch>
              <Route path="/" exact component={GifSearch} />
              <Route path="/favorites" component={FavoriteGifs} />
            </Switch>
          </Main>
          <NotificationsProvider />
        </div>
      </BrowserRouter>
    </StateProvider>
  </StateInspector>
)

export default App

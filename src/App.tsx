import * as React from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import styled from "@emotion/styled"

import StateProvider from "StateProvider"

import GifSearch from "components/GifSearch"
import FavoriteGifs from "components/FavoriteGifs"
import "./App.css"
import logo from "./logo.svg"

const Main = styled.main({
  maxWidth: 1440,
  margin: "0 auto"
})

const App: React.FunctionComponent = () => (
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
      </div>
    </BrowserRouter>
  </StateProvider>
)

export default App

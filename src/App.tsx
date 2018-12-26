import * as React from "react"
import styled from "@emotion/styled"

import GifSearch from "components/GifSearch"
import StateProvider from "StateProvider"

import "./App.css"
import logo from "./logo.svg"

const Main = styled.main({
  maxWidth: 1440,
  margin: "0 auto"
})

const App: React.FunctionComponent = () => (
  <StateProvider>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Gif finder</h1>
      </header>

      <Main>
        <GifSearch />
      </Main>
    </div>
  </StateProvider>
)

export default App

import * as React from "react"
import styled from "@emotion/styled"

import "./App.css"
import { useReducer } from "react"
import logo from "./logo.svg"
import GifSearch from "components/GifSearch"
import { gifsReducer, GifsAction, initialState, GifsState } from "state/gifs"

type AppDispatch = React.Dispatch<GifsAction> | null
const DispatchContext = React.createContext<AppDispatch>(null)

type AppState = GifsState
const StateContext = React.createContext<AppState>(initialState)

const Main = styled.main({
  maxWidth: 1440,
  margin: "0 auto"
})

const App: React.FunctionComponent<{}> = () => {
  const [gifsState, dispatch] = useReducer<GifsState, GifsAction>(
    gifsReducer,
    initialState
  )
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={gifsState}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Gif finder</h1>
          </header>

          <Main>
            <GifSearch />
          </Main>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { DispatchContext, StateContext }
export default App

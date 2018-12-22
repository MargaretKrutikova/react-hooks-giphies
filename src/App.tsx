import * as React from "react"
import "./App.css"
import { useReducer } from "react"
import logo from "./logo.svg"
import GifSearch from "components/GifSearch"
import { gifsReducer, GifsAction, initialState, GifsState } from "state/gifs"

type AppDispatch = React.Dispatch<GifsAction> | null
const DispatchContext = React.createContext<AppDispatch>(null)

type AppState = GifsState
const StateContext = React.createContext<AppState>(initialState)

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
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <GifSearch />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { DispatchContext, StateContext }
export default App

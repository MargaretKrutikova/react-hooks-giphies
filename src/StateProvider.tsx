import * as React from "react"
import { useReducer } from "react"

import rootReducer, { AppState, appInitState, AppAction } from "state"

type AppDispatch = React.Dispatch<AppAction> | null

const DispatchContext = React.createContext<AppDispatch>(null)
const StateContext = React.createContext<AppState>(appInitState)

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [appState, dispatch] = useReducer<AppState, AppAction>(
    rootReducer,
    appInitState
  )
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={appState}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { DispatchContext, StateContext }
export default StateProvider

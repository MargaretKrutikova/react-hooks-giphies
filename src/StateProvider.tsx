import * as React from "react"
import { useReducer } from "reinspect"

import rootReducer, { AppState, appInitState, AppAction } from "state"

const APP_STATE_INSPECTOR_ID = "appState"

type AppDispatch = React.Dispatch<AppAction> | null

const DispatchContext = React.createContext<AppDispatch>(null)
const StateContext = React.createContext<AppState>(appInitState)

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [appState, dispatch] = useReducer<AppState, AppAction>(
    rootReducer,
    appInitState,
    APP_STATE_INSPECTOR_ID
  )
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={appState}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { DispatchContext, StateContext, APP_STATE_INSPECTOR_ID }
export default StateProvider

import { useContext } from "react"
import { StateContext } from "StateProvider"

const useAppState = () => {
  const appState = useContext(StateContext)
  return appState
}

export default useAppState

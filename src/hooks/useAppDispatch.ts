import { useContext } from "react"
import { DispatchContext } from "StateProvider"

const useAppDispatch = () => {
  const dispatch = useContext(DispatchContext)!
  return dispatch
}

export default useAppDispatch

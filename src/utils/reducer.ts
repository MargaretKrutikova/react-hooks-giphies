import { ReducersMap, Reducer, AnyAction } from "types/reducer"

type CombineReducersResult<State> = {
  nextState: State
  hasChanges: boolean
}

export const combineReducers = <State>(
  map: ReducersMap<State>
): Reducer<State> => {
  const reducerKeys = Object.keys(map)

  return (state = {} as State, action: AnyAction): State => {
    const beforeCombine: CombineReducersResult<State> = {
      nextState: {} as State,
      hasChanges: false
    }

    const afterCombine = reducerKeys.reduce<CombineReducersResult<State>>(
      (acc, key) => {
        const prevReducerState = state[key]
        const nextReducerState = map[key](prevReducerState, action)

        const nextState = { ...acc.nextState, [key]: nextReducerState }
        const hasChanges =
          acc.hasChanges || nextReducerState !== prevReducerState
        return { hasChanges, nextState }
      },
      beforeCombine
    )

    return afterCombine.hasChanges ? afterCombine.nextState : state
  }
}

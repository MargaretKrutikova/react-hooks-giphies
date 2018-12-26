export type Action<T extends string = string> = {
  type: T
}

export type AnyAction = Action & {
  [prop: string]: any
}

export type Reducer<
  ReducerState = any,
  ReducerAction extends AnyAction = Action
> = (state: ReducerState | undefined, action: ReducerAction) => ReducerState

export type ReducersMap<
  AppState = any,
  AppAction extends AnyAction = Action
> = { [K in keyof AppState]: Reducer<AppState[K], AppAction> }

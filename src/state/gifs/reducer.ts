import { getType } from "typesafe-actions"
import { Gif } from "types/gif"
import actions, { GifsAction } from "./actions"

export type GifsState = {
  readonly data: Gif[]
  readonly searchTerm: string
  readonly limit: number
  readonly total: number
  readonly page: number
  readonly fetching: boolean
  readonly error?: string | null
}

export const initialState: GifsState = {
  data: [],
  total: 0,
  searchTerm: "",
  limit: 6,
  page: 1,
  fetching: false
}

const gifsReducer = (
  state: GifsState = initialState,
  action: GifsAction
): GifsState => {
  switch (action.type) {
    case getType(actions.fetchGifs): {
      const { searchTerm, page } = action.payload
      return { ...state, searchTerm, page, fetching: true, error: null }
    }

    case getType(actions.setGifs): {
      const { data, total } = action.payload

      return {
        ...state,
        fetching: false,
        error: null,
        data,
        total
      }
    }

    case getType(actions.setError):
      return { ...state, fetching: false, error: action.payload }

    default:
      return state
  }
}

export default gifsReducer

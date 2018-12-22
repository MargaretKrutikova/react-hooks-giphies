import { Gif } from "types/gif"
import { GifsAction, FETCH_GIFS, SET_GIFS, ERROR_GIFS } from "./actions"

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
    case FETCH_GIFS: {
      const { searchTerm, page } = action
      return { ...state, searchTerm, page, fetching: true, error: null }
    }

    case SET_GIFS: {
      const { data, total } = action

      return {
        ...state,
        fetching: false,
        error: null,
        data,
        total
      }
    }

    case ERROR_GIFS:
      return { ...state, fetching: false, error: action.error }

    default:
      return state
  }
}

export default gifsReducer

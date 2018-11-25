import { Gif } from "types/gif"
import {
  GifsAction,
  SEARCH_GIFS,
  FETCH_GIFS,
  REQUEST_PAGE,
  SET_GIFS,
  ERROR_GIFS
} from "./actions"

type GifsState = {
  readonly data: Gif[]
  searchTerm: string
  limit: number
  total: number
  page: number
  fetching: boolean
  error?: string | null
}

const initialState: GifsState = {
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
    case SEARCH_GIFS:
      return { ...state, page: 1, searchTerm: action.searchTerm }

    case REQUEST_PAGE:
      return { ...state, page: action.page }

    case FETCH_GIFS:
      return { ...state, fetching: true, error: null }

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
export { initialState, GifsState }

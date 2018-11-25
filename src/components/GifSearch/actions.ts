import { Gif } from "types/gif"

const SEARCH_GIFS = "gifs/SEARCH"
const REQUEST_PAGE = "gifs/REQUEST_PAGE"
const FETCH_GIFS = "gifs/FETCH_GIFS"
const SET_GIFS = "gifs/SET_GIFS"
const ERROR_GIFS = "gifs/ERROR"

type GifsFetchAction = {
  type: typeof FETCH_GIFS
}

type GifsSearchAction = {
  type: typeof SEARCH_GIFS
  searchTerm: string
}

type GifsRequestPageAction = {
  type: typeof REQUEST_PAGE
  page: number
}

type GifsSetAction = {
  type: typeof SET_GIFS
  data: Gif[]
  total: number
}

type GifsErrorAction = {
  type: typeof ERROR_GIFS
  error: string
}

type GifsAction =
  | GifsSearchAction
  | GifsRequestPageAction
  | GifsFetchAction
  | GifsSetAction
  | GifsErrorAction

const fetchGifs = (): GifsFetchAction => ({
  type: FETCH_GIFS
})

const searchGifs = (searchTerm: string): GifsSearchAction => ({
  type: SEARCH_GIFS,
  searchTerm
})

const requestPage = (page: number): GifsRequestPageAction => ({
  type: REQUEST_PAGE,
  page
})

const setGifs = (data: Gif[], total: number): GifsSetAction => ({
  type: SET_GIFS,
  data,
  total
})

const setError = (error: string): GifsErrorAction => ({
  type: ERROR_GIFS,
  error
})

export default { searchGifs, requestPage, setGifs, setError, fetchGifs }
export {
  SEARCH_GIFS,
  SET_GIFS,
  ERROR_GIFS,
  REQUEST_PAGE,
  FETCH_GIFS,
  GifsAction
}

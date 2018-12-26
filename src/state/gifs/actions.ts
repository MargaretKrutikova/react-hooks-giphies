import { Gif } from "types/gif"

const FETCH_GIFS = "gifs/FETCH_GIFS"
const SET_GIFS = "gifs/SET_GIFS"
const ERROR_GIFS = "gifs/ERROR"

type GifsFetchAction = {
  type: typeof FETCH_GIFS
  searchTerm: string
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

export type GifsAction = GifsFetchAction | GifsSetAction | GifsErrorAction

const fetchGifs = (searchTerm: string, page: number): GifsFetchAction => ({
  type: FETCH_GIFS,
  searchTerm,
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

export { SET_GIFS, ERROR_GIFS, FETCH_GIFS }
export default { setGifs, setError, fetchGifs }

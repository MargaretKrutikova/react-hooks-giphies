import { Gif } from "types/gif"

const TOGGLE_FAVORITE_GIF = "favorites/TOGGLE_GIF"
const FETCH_FAVORITE_GIFS = "favorites/FETCH_GIFS"
const SET_FAVORITE_GIFS = "favorites/SET_GIFS"
const ERROR_FAVORITE_GIFS = "favorites/ERROR_GIFS"

type FavoriteGifToggleAction = {
  type: typeof TOGGLE_FAVORITE_GIF
  gifId: string
}

type FavoriteGifsFetchAction = {
  type: typeof FETCH_FAVORITE_GIFS
}

type FavoriteGifsSetAction = {
  type: typeof SET_FAVORITE_GIFS
  data: Gif[]
}

type FavoriteGifsErrorAction = {
  type: typeof ERROR_FAVORITE_GIFS
  error: string
}

export type FavoriteGifsAction =
  | FavoriteGifToggleAction
  | FavoriteGifsFetchAction
  | FavoriteGifsSetAction
  | FavoriteGifsErrorAction

const toggleFavoriteGif = (gifId: string): FavoriteGifToggleAction => ({
  type: TOGGLE_FAVORITE_GIF,
  gifId
})

const fetchFavoriteGifs = (): FavoriteGifsFetchAction => ({
  type: FETCH_FAVORITE_GIFS
})

const setFavoriteGifs = (data: Gif[]): FavoriteGifsSetAction => ({
  type: SET_FAVORITE_GIFS,
  data
})

const setFavoriteGifsError = (error: string): FavoriteGifsErrorAction => ({
  type: ERROR_FAVORITE_GIFS,
  error
})

export {
  TOGGLE_FAVORITE_GIF,
  FETCH_FAVORITE_GIFS,
  SET_FAVORITE_GIFS,
  ERROR_FAVORITE_GIFS
}
export default {
  toggleFavoriteGif,
  fetchFavoriteGifs,
  setFavoriteGifs,
  setFavoriteGifsError
}

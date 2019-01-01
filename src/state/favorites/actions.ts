import { Gif } from "types/gif"

const ADD_TO_FAVORITE = "favorites/ADD_GIF"
const REMOVE_FROM_FAVORITE = "favorites/REMOVE_GIF"
const FETCH_FAVORITE_GIFS = "favorites/FETCH_GIFS"
const SET_FAVORITE_GIFS = "favorites/SET_GIFS"
const LOAD_FAVORITE_GIF_IDS = "favorites/LOAD_GIF_IDS"
const ERROR_FAVORITE_GIFS = "favorites/ERROR_GIFS"

type AddGifToFavoriteAction = {
  type: typeof ADD_TO_FAVORITE
  gifId: string
}

type RemoveGifFromFavoriteAction = {
  type: typeof REMOVE_FROM_FAVORITE
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

type LoadFavoriteGifIds = {
  type: typeof LOAD_FAVORITE_GIF_IDS
  ids: string[]
}

export type FavoriteGifsAction =
  | AddGifToFavoriteAction
  | RemoveGifFromFavoriteAction
  | FavoriteGifsFetchAction
  | FavoriteGifsSetAction
  | FavoriteGifsErrorAction
  | LoadFavoriteGifIds

const addGifToFavorite = (gifId: string): AddGifToFavoriteAction => ({
  type: ADD_TO_FAVORITE,
  gifId
})

const removeGifFromFavorite = (gifId: string): RemoveGifFromFavoriteAction => ({
  type: REMOVE_FROM_FAVORITE,
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

const loadFavoriteGifIds = (ids: string[]): LoadFavoriteGifIds => ({
  type: LOAD_FAVORITE_GIF_IDS,
  ids
})

export {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  LOAD_FAVORITE_GIF_IDS,
  FETCH_FAVORITE_GIFS,
  SET_FAVORITE_GIFS,
  ERROR_FAVORITE_GIFS
}
export default {
  addGifToFavorite,
  loadFavoriteGifIds,
  removeGifFromFavorite,
  fetchFavoriteGifs,
  setFavoriteGifs,
  setFavoriteGifsError
}

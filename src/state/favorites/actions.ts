import { Gif } from "types/gif"
import {
  createAction,
  createStandardAction,
  ActionType
} from "typesafe-actions"

const addGifToFavorite = createAction(
  "favorites/ADD_GIF",
  resolve => (gifId: string) => resolve({ gifId })
)
const removeGifFromFavorite = createAction(
  "favorites/REMOVE_GIF",
  resolve => (gifId: string) => resolve({ gifId })
)
const fetchFavoriteGifs = createAction("favorites/FETCH_GIFS")

const setFavoriteGifs = createStandardAction("favorites/SET_GIFS")<Gif[]>()

const setFavoriteGifsError = createStandardAction("favorites/ERROR_GIFS")<
  string
>()
const loadFavoriteGifIds = createStandardAction("favorites/LOAD_GIF_IDS")<
  string[]
>()

const actions = {
  addGifToFavorite,
  loadFavoriteGifIds,
  removeGifFromFavorite,
  fetchFavoriteGifs,
  setFavoriteGifs,
  setFavoriteGifsError
}

export type FavoriteGifsAction = ActionType<typeof actions>
export default actions

import { Gif } from "types/gif"
import {
  createAction,
  createStandardAction,
  ActionType
} from "typesafe-actions"

const fetchGifs = createAction(
  "gifs/FETCH_GIFS",
  resolve => (searchTerm: string, page: number) => resolve({ searchTerm, page })
)
const setGifs = createAction(
  "gifs/SET_GIFS",
  resolve => (data: Gif[], total: number, offset: number) =>
    resolve({ data, total, offset })
)
const setError = createStandardAction("gifs/ERROR")<string>()

const actions = { setGifs, setError, fetchGifs }

export type GifsAction = ActionType<typeof actions>
export default actions

import { AppState } from "state"
import { Gif } from "types/gif"

const getGifs = (state: AppState): Gif[] => state.gifs.data || []
const getError = (state: AppState) => state.gifs.error
const getSearchTerm = (state: AppState) => state.gifs.searchTerm
const getCurrentPage = (state: AppState) => state.gifs.page
const getLimit = (state: AppState) => state.gifs.limit
const getIsFetching = (state: AppState) => state.gifs.fetching

const getHasMorePages = (state: AppState) => {
  const { data, page, limit, total } = state.gifs
  return limit * page + data.length < total
}

export default {
  getGifs,
  getError,
  getLimit,
  getSearchTerm,
  getCurrentPage,
  getIsFetching,
  getHasMorePages
}

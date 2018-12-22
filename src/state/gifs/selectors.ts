import { GifsState } from "./reducer"

const getGifs = (state: GifsState) => state.data
const getSearchTerm = (state: GifsState) => state.searchTerm
const getCurrentPage = (state: GifsState) => state.page
const getIsFetching = (state: GifsState) => state.fetching

const getHasMorePages = (state: GifsState) => {
  const { data, page, limit, total } = state
  return limit * page + data.length < total
}

export default {
  getGifs,
  getSearchTerm,
  getCurrentPage,
  getIsFetching,
  getHasMorePages
}

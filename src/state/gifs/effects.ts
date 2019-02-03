import DataProvider from "api/dataProvider"
import { AppState, AppAction } from "state"

import actions from "./actions"
import selectors from "./selectors"

const fetch = async (
  searchTerm: string,
  limit: number,
  page: number,
  dispatch: React.Dispatch<AppAction>
) => {
  try {
    dispatch(actions.fetchGifs(searchTerm, page))

    const offset = (page - 1) * limit
    const { data, pagination } = await DataProvider.searchGifs(
      searchTerm,
      limit,
      offset
    )

    dispatch(actions.setGifs(data, pagination.total_count, pagination.offset))
  } catch (error) {
    actions.setError(error.toString())
  }
}

const goToPage = async (
  state: AppState,
  dispatch: React.Dispatch<AppAction>,
  page: number
) => {
  const limit = selectors.getLimit(state)
  const fetching = selectors.getIsFetching(state)
  const currentPage = selectors.getCurrentPage(state)
  const searchTerm = selectors.getSearchTerm(state)

  if (page === currentPage || fetching) {
    return
  }
  await fetch(searchTerm, limit, page, dispatch)
}

const searchGifs = async (
  state: AppState,
  dispatch: React.Dispatch<AppAction>,
  searchTerm: string
) => {
  const limit = selectors.getLimit(state)
  const fetching = selectors.getIsFetching(state)

  if (!searchTerm || fetching) {
    return
  }

  await fetch(searchTerm, limit, 1, dispatch)
}

export default { fetch, goToPage, searchGifs }

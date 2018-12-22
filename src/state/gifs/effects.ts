import DataProvider from "api/dataProvider"

import actions, { GifsAction } from "./actions"
import { GifsState } from "./reducer"

const fetch = async (
  searchTerm: string,
  limit: number,
  page: number,
  dispatch: React.Dispatch<GifsAction>
) => {
  try {
    dispatch(actions.fetchGifs(searchTerm, page))

    const offset = (page - 1) * limit
    const { data, pagination } = await DataProvider.searchGifs(
      searchTerm,
      limit,
      offset
    )

    dispatch(actions.setGifs(data, pagination.total_count))
  } catch (error) {
    actions.setError(error.toString())
  }
}

const goToPage = async (
  state: GifsState,
  dispatch: React.Dispatch<GifsAction>,
  requestedPage: number
) => {
  const { fetching, limit, page, searchTerm } = state
  if (requestedPage === page || fetching) {
    return
  }

  await fetch(searchTerm, limit, requestedPage, dispatch)
}

const searchGifs = async (
  state: GifsState,
  dispatch: React.Dispatch<GifsAction>,
  searchTerm: string
) => {
  const { fetching, limit } = state
  if (!searchTerm || fetching) {
    return
  }

  await fetch(searchTerm, limit, 1, dispatch)
}

export default { fetch, goToPage, searchGifs }

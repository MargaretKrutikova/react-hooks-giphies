import { useEffect, useState } from "react"
import DataProvider from "api/dataProvider"

import actions, { GifsAction } from "./actions"
import { GifsState } from "./reducer"

const SEARCH_DEBOUNCE = 500

const fetchData = async (
  state: GifsState,
  dispatch: React.Dispatch<GifsAction>
) => {
  const { searchTerm, page, limit, fetching } = state
  if (!searchTerm || fetching) {
    return
  }

  try {
    dispatch(actions.fetchGifs())

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

const useSearchInputDebounceEffect = (
  dispatch: React.Dispatch<GifsAction>
): [string, (e: React.FormEvent<HTMLInputElement>) => void] => {
  const [searchTerm, updateSearch] = useState("")
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    updateSearch(e.currentTarget.value)
  }

  useEffect(
    () => {
      const timerId = setTimeout(() => {
        dispatch(actions.searchGifs(searchTerm))
      }, SEARCH_DEBOUNCE)

      return () => {
        clearTimeout(timerId)
      }
    },
    [searchTerm, SEARCH_DEBOUNCE]
  )

  return [searchTerm, handleChange]
}

const useUpdateGifsEffect = (
  state: GifsState,
  dispatch: React.Dispatch<GifsAction>
) => {
  const { searchTerm, page } = state
  useEffect(
    () => {
      fetchData(state, dispatch)
    },
    [searchTerm, page]
  )
}

export { useUpdateGifsEffect, useSearchInputDebounceEffect }

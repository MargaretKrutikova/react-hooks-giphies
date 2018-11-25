import * as React from "react"
import { useReducer } from "react"
import { Gif } from "types/gif"

import gifsReducer, { initialState, GifsState } from "./reducer"
import actions, { GifsAction } from "./actions"
import { useSearchInputDebounceEffect, useUpdateGifsEffect } from "./effects"

const hasMorePages = (state: GifsState) => {
  const { data, page, limit, total } = state
  return limit * page + data.length < total
}

const GiphySearch: React.SFC<{}> = () => {
  const [gifsState, dispatch] = useReducer<GifsState, GifsAction>(
    gifsReducer,
    initialState
  )

  const [searchValue, handleChange] = useSearchInputDebounceEffect(dispatch)
  useUpdateGifsEffect(gifsState, dispatch)

  const goToPage = (page: number) => dispatch(actions.requestPage(page))

  const disabledLastPage = !hasMorePages(gifsState)
  const { data, page: currentPage, error, fetching } = gifsState

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />

      {fetching && <div>Loading...</div>}
      {error && <div>Oooops... An error has occured!</div>}

      <div>
        {data.map((gif: Gif) => (
          <div key={gif.slug}>
            <img src={gif.images.downsized_medium.url} />
          </div>
        ))}
      </div>

      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={disabledLastPage}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default GiphySearch

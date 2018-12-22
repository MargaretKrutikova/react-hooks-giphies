import * as React from "react"
import { Gif } from "types/gif"

import useInputValue from "hooks/useInputValue"
import useDebounceEffect from "hooks/useDebounceEffect"

const SEARCH_DEBOUNCE = 500

export type GifSearchProps = {
  gifs: Gif[]
  currentPage: number
  fetching: boolean
  error?: string | null
  hasMorePages: boolean
  searchGifs: (searchTerm: string) => void
  goToPage: (page: number) => void
}

const GifSearch: React.FunctionComponent<GifSearchProps> = props => {
  const {
    gifs,
    currentPage,
    hasMorePages,
    fetching,
    error,
    searchGifs,
    goToPage
  } = props

  const [searchTerm, handleSearchChange] = useInputValue()
  useDebounceEffect(
    () => {
      searchGifs(searchTerm)
    },
    [searchTerm],
    SEARCH_DEBOUNCE
  )

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} />

      {fetching && <div>Loading...</div>}
      {error && <div>Oooops... An error has occured!</div>}

      <div>
        {gifs.map((gif: Gif) => (
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
        disabled={!hasMorePages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default GifSearch

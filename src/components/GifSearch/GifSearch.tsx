import * as React from "react"
import styled from "@emotion/styled"

import { Gif as GifType } from "types/gif"
import useInputValue from "hooks/useInputValue"
import useDebounceEffect from "hooks/useDebounceEffect"

import GifList from "components/GifList"
import Button from "components/Button"

const SEARCH_DEBOUNCE = 800

export type GifSearchProps = {
  gifs: GifType[]
  currentPage: number
  fetching: boolean
  error?: string | null
  hasMorePages: boolean
  searchGifs: (searchTerm: string) => void
  goToPage: (page: number) => void
}

const PagingButton = styled(Button)({
  margin: "0 10px"
})

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

      <GifList gifs={gifs} />

      <PagingButton
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Previous
      </PagingButton>
      <PagingButton
        disabled={!hasMorePages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Next
      </PagingButton>
    </div>
  )
}

export default GifSearch

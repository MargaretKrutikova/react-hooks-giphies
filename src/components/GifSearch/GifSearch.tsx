import * as React from "react"
import styled from "@emotion/styled"

import { Gif as GifType } from "types/gif"
import useInputValue from "hooks/useInputValue"
import useDebounceEffect from "hooks/useDebounceEffect"

import GifList from "components/GifList"
import Button from "components/Button"
import Input from "components/Input"
import SearchIcon from "components/SearchIcon"

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

const PagingContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  marginBottom: 20
})

const PagingButton = styled(Button)({
  margin: "0 10px"
})

const SearchInput = styled(Input)({
  width: "40%",
  margin: "0 auto",
  marginBottom: 20,
  fontSize: 28
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
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        icon={<SearchIcon />}
      />

      {fetching && <div>Loading...</div>}
      {error && <div>Oooops... An error has occured!</div>}

      <GifList gifs={gifs} />

      {gifs.length > 0 && (
        <PagingContainer>
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
        </PagingContainer>
      )}
    </div>
  )
}

export default GifSearch

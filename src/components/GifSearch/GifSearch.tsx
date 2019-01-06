import * as React from "react"
import styled from "@emotion/styled"

import { Gif as GifType } from "types/gif"
import useInputValue from "hooks/useInputValue"
import useDebounceEffect from "hooks/useDebounceEffect"

import GifList from "components/GifList"
import Spinner from "components/icons/Spinner"
import Button from "components/Button"
import SearchInput from "./SearchInput"

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

const Root = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center"
})

const PagingContainer = styled.div({
  display: "flex",
  justifyContent: "center"
})

const PagingButton = styled(Button)({
  margin: "0 10px"
})

const SpinnerContainer = styled.div({
  position: "absolute",
  top: 65
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
    <Root>
      <SearchInput value={searchTerm} onChange={handleSearchChange} />

      {fetching && (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      )}
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
    </Root>
  )
}

export default GifSearch

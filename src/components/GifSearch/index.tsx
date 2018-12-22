import * as React from "react"
import { useContext, useCallback } from "react"

import { gifsSelectors, gifsEffects } from "state/gifs"
import { DispatchContext, StateContext } from "App"

import GifSearch, { GifSearchProps } from "./GifSearch"

const GiphySearchContainer: React.FunctionComponent<{}> = () => {
  const dispatch = useContext(DispatchContext)!
  const gifsState = useContext(StateContext)

  // map dispatch to props
  const searchGifs = useCallback(
    (search: string) => {
      gifsEffects.searchGifs(gifsState, dispatch, search)
    },
    [gifsState]
  )

  const goToPage = useCallback(
    (page: number) => gifsEffects.goToPage(gifsState, dispatch, page),
    [gifsState]
  )

  // map state to props
  const hasMorePages = gifsSelectors.getHasMorePages(gifsState)

  const { page: currentPage, fetching, error, data: gifs } = gifsState
  const props: GifSearchProps = {
    gifs,
    error,
    currentPage,
    fetching,
    hasMorePages,
    searchGifs,
    goToPage
  }

  const inputs = Object.keys(props).map(key => props[key])
  return React.useMemo(() => <GifSearch {...props} />, inputs)
}

export default GiphySearchContainer

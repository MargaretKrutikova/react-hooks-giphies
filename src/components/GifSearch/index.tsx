import * as React from "react"
import { useCallback, useMemo } from "react"

import useAppState from "hooks/useAppState"
import useAppDispatch from "hooks/useAppDispatch"
import { gifsSelectors, gifsEffects } from "state/gifs"

import GifSearch, { GifSearchProps } from "./GifSearch"

const GifSearchContainer: React.FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch()
  const appState = useAppState()

  const searchGifs = useCallback(
    (search: string) => {
      gifsEffects.searchGifs(appState, dispatch, search)
    },
    [appState]
  )

  const goToPage = useCallback(
    (page: number) => gifsEffects.goToPage(appState, dispatch, page),
    [appState]
  )

  const props: GifSearchProps = {
    // map dispatch to props
    searchGifs,
    goToPage,
    // map state to props
    gifs: gifsSelectors.getGifs(appState),
    error: gifsSelectors.getError(appState),
    currentPage: gifsSelectors.getCurrentPage(appState),
    fetching: gifsSelectors.getIsFetching(appState),
    hasMorePages: gifsSelectors.getHasMorePages(appState)
  }

  const inputs = Object.keys(props).map(key => props[key])
  return useMemo(() => <GifSearch {...props} />, inputs)
}

export default GifSearchContainer

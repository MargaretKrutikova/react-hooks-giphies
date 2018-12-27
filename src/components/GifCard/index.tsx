import * as React from "react"
import { useCallback, useMemo } from "react"

import useAppState from "hooks/useAppState"
import useAppDispatch from "hooks/useAppDispatch"
import { favoriteGifsActions, favoriteGifsSelectors } from "state/favorites"

import GifCard, { GifCardOwnProps, GifCardContextProps } from "./GifCard"

const GifCardContainer: React.FunctionComponent<GifCardOwnProps> = props => {
  const dispatch = useAppDispatch()
  const appState = useAppState()

  const { id } = props.gif
  const toggleFavorite = useCallback(
    () => dispatch(favoriteGifsActions.toggleFavoriteGif(id)),
    [id]
  )

  const isFavorite = useMemo(
    () => favoriteGifsSelectors.getIsFavoriteGif(appState, id),
    [appState, id]
  )

  const contextProps: GifCardContextProps = {
    // map dispatch to props
    toggleFavorite,
    // map state to props
    isFavorite
  }

  const gifCardProps = { ...contextProps, ...props }

  const inputs = Object.keys(gifCardProps).map(key => gifCardProps[key])
  return React.useMemo(() => <GifCard {...gifCardProps} />, inputs)
}

export default GifCardContainer

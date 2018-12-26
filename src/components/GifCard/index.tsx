import * as React from "react"
import { useContext, useCallback, useMemo } from "react"

import { favoriteGifsActions, favoriteGifsSelectors } from "state/favorites"
import { DispatchContext, StateContext } from "StateProvider"

import GifCard, { GifCardOwnProps, GifCardContextProps } from "./GifCard"

const GifCardContainer: React.FunctionComponent<GifCardOwnProps> = props => {
  const dispatch = useContext(DispatchContext)!
  const appState = useContext(StateContext)

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

import * as React from "react"
import { useCallback, useMemo } from "react"

import useAppState from "hooks/useAppState"
import useAppDispatch from "hooks/useAppDispatch"
import { favoriteGifsSelectors, favoriteGifsEffects } from "state/favorites"

import GifCard, { GifCardOwnProps, GifCardContextProps } from "./GifCard"

const GifCardContainer: React.FunctionComponent<GifCardOwnProps> = props => {
  const dispatch = useAppDispatch()
  const appState = useAppState()

  const { id } = props.gif

  const isFavorite = useMemo(
    () => favoriteGifsSelectors.getIsFavoriteGif(appState, id),
    [appState, id]
  )

  const toggleFavorite = useCallback(
    () => {
      if (isFavorite) {
        favoriteGifsEffects.removeFromFavorites(appState, dispatch, id)
      } else {
        favoriteGifsEffects.addToFavorite(appState, dispatch, id)
      }
    },
    [id, isFavorite]
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

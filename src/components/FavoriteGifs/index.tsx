import * as React from "react"
import { useEffect, useMemo } from "react"

import useAppState from "hooks/useAppState"
import useAppDispatch from "hooks/useAppDispatch"
import { favoriteGifsEffects, favoriteGifsSelectors } from "state/favorites"
import GifList from "components/GifList"

const FavoriteGifs: React.FunctionComponent<{}> = () => {
  const dispatch = useAppDispatch()
  const appState = useAppState()

  useEffect(() => {
    favoriteGifsEffects.fetch(appState, dispatch)
  }, [])

  const favorites = favoriteGifsSelectors.getFavoriteGifs(appState)

  return useMemo(() => <GifList gifs={favorites} />, [favorites])
}

export default FavoriteGifs

import DataProvider from "api/dataProvider"
import { AppState, AppAction } from "state"
import { notificationsActions } from "state/notifications"
import {
  createSuccessNotification,
  creatErrorNotification
} from "types/notification"

import actions from "./actions"

const addToFavorites = async (
  _: AppState,
  dispatch: React.Dispatch<AppAction>,
  gifId: string
) => {
  dispatch(actions.addGifToFavorite(gifId))

  try {
    await DataProvider.addGifToFavorites(gifId)

    dispatch(
      notificationsActions.queue(
        createSuccessNotification("Saved to favorites!")
      )
    )
  } catch (error) {
    dispatch(actions.removeGifFromFavorite(gifId))

    dispatch(
      notificationsActions.queue(
        creatErrorNotification("Ooops.. Failed to update favorites!")
      )
    )
  }
}

const removeFromFavorites = async (
  _: AppState,
  dispatch: React.Dispatch<AppAction>,
  gifId: string
) => {
  dispatch(actions.removeGifFromFavorite(gifId))

  try {
    await DataProvider.removeGifFromFavorites(gifId)

    dispatch(
      notificationsActions.queue(
        createSuccessNotification("Removed from favorites!")
      )
    )
  } catch (error) {
    dispatch(actions.addGifToFavorite(gifId))

    dispatch(
      notificationsActions.queue(
        creatErrorNotification("Ooops.. Failed to update favorites!")
      )
    )
  }
}

const fetchFavoriteGifIds = async (
  _: AppState,
  dispatch: React.Dispatch<AppAction>
) => {
  try {
    const ids = await DataProvider.fetchFavoriteGifIds()
    dispatch(actions.loadFavoriteGifIds(ids))

    return ids
  } catch (error) {
    actions.setFavoriteGifsError(error.toString())
    dispatch(
      notificationsActions.queue(
        creatErrorNotification("Ooops.. Failed to fetch favorite gifs!")
      )
    )
    return []
  }
}

const fetchFavoriteGifs = async (
  state: AppState,
  dispatch: React.Dispatch<AppAction>
) => {
  const ids = await fetchFavoriteGifIds(state, dispatch)
  if (!ids || ids.length === 0) {
    return
  }

  try {
    dispatch(actions.fetchFavoriteGifs())

    const { data } = await DataProvider.fetchGifsByIds(ids)

    dispatch(actions.setFavoriteGifs(data))
  } catch (error) {
    actions.setFavoriteGifsError(error.toString())

    dispatch(
      notificationsActions.queue(
        creatErrorNotification("Ooops.. Failed to fetch gifs!")
      )
    )
  }
}

export default {
  fetchFavoriteGifs,
  fetchFavoriteGifIds,
  addToFavorite: addToFavorites,
  removeFromFavorites
}

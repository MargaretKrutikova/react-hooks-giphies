import DataProvider from "api/dataProvider"
import { AppState, AppAction } from "state"

import actions from "./actions"
import selectors from "./selectors"

const fetch = async (state: AppState, dispatch: React.Dispatch<AppAction>) => {
  const ids = selectors.getFavoriteGifIds(state)

  try {
    dispatch(actions.fetchFavoriteGifs())

    const { data } = await DataProvider.fetchGifsByIds(ids)

    dispatch(actions.setFavoriteGifs(data))
  } catch (error) {
    actions.setFavoriteGifsError(error.toString())
  }
}

export default { fetch }

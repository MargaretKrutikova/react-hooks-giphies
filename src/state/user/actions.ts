const TOGGLE_FAVORITE_GIF = "user/TOGGLE_FAVORITE_GIF"

type ToggleFavoriteGifAction = {
  type: typeof TOGGLE_FAVORITE_GIF
  gifId: string
}

export type UserAction = ToggleFavoriteGifAction

const toggleFavoriteGif = (gifId: string): ToggleFavoriteGifAction => ({
  type: TOGGLE_FAVORITE_GIF,
  gifId
})

export { TOGGLE_FAVORITE_GIF }
export default { toggleFavoriteGif }

import { Gif, GifsPagination } from "types/gif"
import * as localStorage from "utils/localStorage"

const FAVORITE_GIFS_LOCAL_STORAGE_KEY = "favorite_gifs"

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://api.giphy.com/v1/gifs`

type PaginatedGifsResponse = {
  readonly data: Gif[]
  readonly pagination: GifsPagination
}

class DataProvider {
  searchGifs = async (
    searchTerm: string,
    limit: number,
    offset: number
  ): Promise<PaginatedGifsResponse> => {
    const response = await fetch(
      `${API_URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=${limit}&offset=${offset}`
    )

    return await response.json()
  }

  fetchGifsByIds = async (ids: string[]): Promise<PaginatedGifsResponse> => {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}&ids=${ids.join(",")}`
    )

    return await response.json()
  }

  addGifToFavorites = async (gifId: string): Promise<void> =>
    new Promise((resolve, reject) => {
      const success = localStorage.addToArray(
        FAVORITE_GIFS_LOCAL_STORAGE_KEY,
        gifId
      )
      return success ? resolve() : reject()
    })

  removeGifFromFavorites = async (gifId: string): Promise<void> =>
    new Promise((resolve, reject) => {
      const success = localStorage.removeFromArray(
        FAVORITE_GIFS_LOCAL_STORAGE_KEY,
        gifId
      )
      return success ? resolve() : reject()
    })

  fetchFavoriteGifIds = async (): Promise<string[]> =>
    new Promise(resolve => {
      const gifIds = localStorage.load<string[]>(
        FAVORITE_GIFS_LOCAL_STORAGE_KEY
      )
      return resolve(gifIds || [])
    })
}

export default new DataProvider()

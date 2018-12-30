import { Gif, GifsPagination } from "types/gif"

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
    const response = await await fetch(
      `${API_URL}?api_key=${API_KEY}&ids=${ids.join(",")}`
    )

    return await response.json()
  }
}

export default new DataProvider()

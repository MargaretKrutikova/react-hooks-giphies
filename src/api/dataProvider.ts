import { Gif, GifsPagination } from "types/gif"

const API_KEY = process.env.REACT_APP_API_KEY
const API_URL = `http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`

type SearchGifsResponse = {
  readonly data: Gif[]
  readonly pagination: GifsPagination
}

class DataProvider {
  searchGifs = async (
    searchTerm: string,
    limit: number,
    offset: number
  ): Promise<SearchGifsResponse> => {
    const response = await fetch(
      `${API_URL}&q=${searchTerm}&limit=${limit}&offset=${offset}`
    )

    return await response.json()
  }
}

export default new DataProvider()

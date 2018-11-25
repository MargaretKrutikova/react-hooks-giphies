type GifsPagination = {
  offset: number
  total_count: number
  count: number
}

type DownsizedImage = {
  height: string
  size: string
  url: string
  width: string
}

type Gif = {
  rating: string
  slug: string
  source: string
  source_post_url: string
  source_tld: string
  title: string
  type: string
  url: string
  embed_url: string
  images: {
    downsized_medium: DownsizedImage
    downsized_large: DownsizedImage
  }
}

export { Gif, GifsPagination }

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

type OriginalImage = {
  url: string
  width: string
  height: string
  size: string
  frames: string
  mp4: string
  mp4_size: string
  webp: string
  webp_size: string
}

type OriginalMp4 = {
  width: string
  height: string
  mp4: string
  mp4_size: string
}

type Still480w = {
  url: string
  width: string
  height: string
}

type Gif = {
  id: string
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
    original: OriginalImage
    downsized_medium: DownsizedImage
    downsized_large: DownsizedImage
    original_mp4: OriginalMp4
    "480w_still": Still480w
  }
}

export { Gif, GifsPagination }

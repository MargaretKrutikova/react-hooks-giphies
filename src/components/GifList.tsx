import * as React from "react"
import styled from "@emotion/styled"

import { Gif } from "types/gif"
import media from "utils/media"

import GifCard from "./GifCard"
import Masonry from "./Masonry"

type Props = {
  gifs: Gif[]
}

const GifListItem = styled(GifCard)({
  margin: 10,
  [media.phoneOnly]: {
    margin: 5
  }
})

const GifList: React.FunctionComponent<Props> = ({ gifs }) => (
  <Masonry
    getChildKeyByIndex={(ind: number) => gifs[ind].id}
    gridGap={10}
    colWidth={280}
  >
    {gifs.map(gif => (
      <GifListItem key={gif.slug} gif={gif} />
    ))}
  </Masonry>
)

export default GifList

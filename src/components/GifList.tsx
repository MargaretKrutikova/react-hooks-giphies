import * as React from "react"
import styled from "@emotion/styled"

import media from "utils/media"
import { Gif } from "types/gif"

import GifCard from "./GifCard"

type Props = {
  gifs: Gif[]
}

const List = styled.div({
  display: "inline-flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%"
})

const GifListItem = styled(GifCard)({
  maxWidth: "30%",
  padding: 10,
  marginBottom: 20,
  [media.tabletPortraitAndSmaller]: {
    maxWidth: "45%"
  },
  [media.phoneOnly]: {
    maxWidth: "100%"
  }
})

const GifList: React.FunctionComponent<Props> = ({ gifs }) => (
  <List>
    {gifs.map(gif => (
      <GifListItem key={gif.slug} gif={gif} />
    ))}
  </List>
)

export default GifList

import * as React from "react"
import styled from "@emotion/styled"

import useLoadingStatus from "hooks/useLoadingStatus"
import { LoadingStatus, hasLoaded } from "types/loadingStatus"
import { Gif } from "types/gif"
import { defaultIfNaN } from "utils/number"

import FavoriteIcon from "components/icons/FavoriteIcon"
import IconButton from "components/IconButton"
import ShareIcon from "components/icons/ShareIcon"
import VideoPlaceholder from "../VideoPlaceholder"

export type GifCardContextProps = {
  toggleFavorite: () => void
  isFavorite: boolean
}

export type GifCardOwnProps = {
  className?: string
  gif: Gif
}

type Props = GifCardOwnProps & GifCardContextProps

const Video = styled.video<{ status: LoadingStatus }>(({ status }) => ({
  width: "100%",
  height: "auto",
  display: hasLoaded(status) ? "block" : "none"
}))

const VideoContainer = styled.div({
  position: "relative"
})

const Actions = styled.div({
  position: "absolute",
  top: 5,
  right: 5,
  zIndex: 2,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end"
})

const ActionButton = styled(IconButton)({
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  ":hover:enabled": {
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  "& + &": {
    marginLeft: 5
  }
})

const ActionLink = styled.a({
  display: "flex"
})

const GifCard: React.FunctionComponent<Props> = ({
  gif,
  className,
  toggleFavorite,
  isFavorite
}) => {
  const [loadingStatus, events] = useLoadingStatus()

  const original = gif.images.original_mp4 || {}

  const height = defaultIfNaN(Number(original.height), 480)
  const width = defaultIfNaN(Number(original.width), 480)
  const src = original.mp4 || ""

  return (
    <VideoContainer className={className}>
      <Actions>
        <ActionButton>
          <FavoriteIcon isFavorite={isFavorite} onClick={toggleFavorite} />
        </ActionButton>

        <ActionButton>
          <ActionLink href={gif.embed_url} target="blank">
            <ShareIcon />
          </ActionLink>
        </ActionButton>
      </Actions>

      <Video
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        onCanPlay={events.handleLoaded}
        onLoadStart={events.handleLoadStart}
        preload="auto"
        status={loadingStatus}
      >
        <source type="video/mp4" src={src} />
      </Video>
      <VideoPlaceholder
        height={height}
        width={width}
        loadingStatus={loadingStatus}
      />
    </VideoContainer>
  )
}

export default GifCard

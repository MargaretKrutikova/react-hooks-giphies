import * as React from "react"
import styled from "@emotion/styled"

import useLoadingStatus from "hooks/useLoadingStatus"
import { LoadingStatus, hasLoaded } from "types/loadingStatus"
import { Gif } from "types/gif"
import { defaultIfNaN } from "utils/number"

import VideoPlaceholder from "../VideoPlaceholder"
import FavoriteIcon from "../FavoriteIcon"

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

const VideoContainer = styled.div<{ width: number }>(({ width }) => ({
  width,
  position: "relative"
}))

const Actions = styled.div({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 2,
  width: "100%",
  display: "flex",
  justifyContent: "flex-end"
})

const ActionIcon = styled.span({
  padding: 6,
  display: "flex",
  borderRadius: "50%",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  transition: "background-color .2s ease-out",
  ":hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
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
    <VideoContainer width={width} className={className}>
      <Actions>
        <ActionIcon>
          <FavoriteIcon isFavorite={isFavorite} onClick={toggleFavorite} />
        </ActionIcon>
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

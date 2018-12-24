import * as React from "react"
import styled from "@emotion/styled"

import useLoadingStatus from "hooks/useLoadingStatus"
import { LoadingStatus, hasLoaded } from "types/loadingStatus"
import { Gif } from "types/gif"
import { defaultIfNaN } from "utils/number"

import VideoPlaceholder from "./VideoPlaceholder"

type Props = {
  className?: string
  gif: Gif
}

const Video = styled.video<{ status: LoadingStatus }>(({ status }) => ({
  width: "100%",
  height: "auto",
  display: hasLoaded(status) ? "block" : "none"
}))

const VideoContainer = styled.div<{ width: number }>(({ width }) => ({ width }))

const GifCard: React.FunctionComponent<Props> = ({ gif, className }) => {
  const [loadingStatus, events] = useLoadingStatus()

  const original = gif.images.original_mp4 || {}

  const height = defaultIfNaN(Number(original.height), 480)
  const width = defaultIfNaN(Number(original.width), 480)
  const src = original.mp4 || ""

  return (
    <VideoContainer width={width} className={className}>
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

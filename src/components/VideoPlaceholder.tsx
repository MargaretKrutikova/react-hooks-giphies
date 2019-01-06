import * as React from "react"
import styled from "@emotion/styled"

import { LoadingStatus, hasLoaded, isLoading } from "types/loadingStatus"
import Spinner from "./icons/Spinner"
import { omitProps } from "utils/styling"

type Props = {
  height: number
  width: number
  loadingStatus: LoadingStatus
}

const VideoSizeBlock = styled("div", omitProps<Props>("width", "height"))<
  Props
>(({ height, width, loadingStatus }) => ({
  paddingBottom: `calc(100% * ${height / width})`,
  width: "100%",
  position: "relative",
  display: hasLoaded(loadingStatus) ? "none" : "block",
  backgroundColor: "#D8D3D0",
  transition: "opacity 6s ease-out",
  opacity: isLoading(loadingStatus) ? 1 : 0.2
}))

const SpinnerContainer = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const VideoPlaceholder: React.FunctionComponent<Props> = props => (
  <VideoSizeBlock {...props}>
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  </VideoSizeBlock>
)

export default VideoPlaceholder

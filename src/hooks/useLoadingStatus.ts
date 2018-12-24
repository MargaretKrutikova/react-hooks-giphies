import { useState } from "react"
import { LoadingStatus } from "types/loadingStatus"

type LoadingEventHandlers = {
  handleLoadStart: (
    e: React.SyntheticEvent<HTMLVideoElement | HTMLImageElement>
  ) => void
  handleLoaded: (
    e: React.SyntheticEvent<HTMLVideoElement | HTMLImageElement>
  ) => void
}

const useLoadingStatus = (): [LoadingStatus, LoadingEventHandlers] => {
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatus>(
    LoadingStatus.NotStarted
  )

  const handleStartedLoading = () => {
    setLoadingStatus(LoadingStatus.Started)
  }

  const handleLoaded = () => {
    setLoadingStatus(LoadingStatus.Loaded)
  }

  return [
    loadingStatus,
    { handleLoadStart: handleStartedLoading, handleLoaded }
  ]
}

export default useLoadingStatus

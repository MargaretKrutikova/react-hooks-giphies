enum LoadingStatus {
  NotStarted,
  Started,
  Loaded
}

const hasLoaded = (status: LoadingStatus) => status === LoadingStatus.Loaded

const isLoading = (status: LoadingStatus) => status === LoadingStatus.Started

export { LoadingStatus, hasLoaded, isLoading }

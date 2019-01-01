type Notification = {
  id: number
  isOpen: boolean
} & NotificationProps

type NotificationProps = {
  type: "error" | "success"
  message: string
}

const createSuccessNotification = (message: string): NotificationProps => ({
  type: "success",
  message
})

const creatErrorNotification = (message: string): NotificationProps => ({
  type: "error",
  message
})

export {
  Notification,
  NotificationProps,
  createSuccessNotification,
  creatErrorNotification
}

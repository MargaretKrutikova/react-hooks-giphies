type Notification = {
  id: number
  isOpen: boolean
} & NotificationProps

type NotificationProps = {
  type: "error" | "success"
  message: string
}

export { Notification, NotificationProps }

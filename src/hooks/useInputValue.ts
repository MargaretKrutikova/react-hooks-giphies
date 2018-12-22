import { useState } from "react"

const useInputValue = (
  initialValue: string = ""
): [string, (e: React.FormEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return [value, onChange]
}

export default useInputValue

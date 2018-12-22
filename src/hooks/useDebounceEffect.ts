import { useEffect, EffectCallback, InputIdentityList } from "react"

const useDebounceEffect = (
  callback: EffectCallback,
  inputs: InputIdentityList,
  debounce: number
) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      callback()
    }, debounce)

    return () => {
      clearTimeout(timerId)
    }
  }, inputs)
}

export default useDebounceEffect

import { useState, useRef, useEffect } from "react"

const useWindowSize = (
  debounceMs: number = 0,
  onWindowResize?: (windowWidth: number) => void
) => {
  const [width, setWidth] = useState(window.innerWidth)
  const timerIdRef = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    const handleResize = () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }

      timerIdRef.current = setTimeout(() => {
        const windowWidth = window.innerWidth

        onWindowResize && onWindowResize(windowWidth)
        setWidth(windowWidth)
      }, debounceMs)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return width
}

export default useWindowSize

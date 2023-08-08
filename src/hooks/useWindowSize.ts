import { useEffect, useState } from 'react'

export interface WindowSize {
  height: undefined | number
  width: undefined | number
}

export default function useWindowSize (): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    height: undefined,
    width: undefined
  })
  useEffect(() => {
    function handleResize () {
      setWindowSize({
        height: Math.min((document.documentElement.clientHeight, (window.innerHeight ?? 0))),
        width: Math.min(document.documentElement.clientWidth, (window.innerWidth ?? 0))
      })
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  return windowSize
}

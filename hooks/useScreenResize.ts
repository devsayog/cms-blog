import { useState, useEffect } from 'react'

const isMdScreen = () => (typeof window === 'undefined' ? false : window.innerWidth >= 768)

const useScreenResize = () => {
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    setIsMd(isMdScreen)

    const onResize = () => setIsMd(isMdScreen)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return { isMd }
}

export default useScreenResize

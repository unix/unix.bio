import { useEffect } from 'react'

const useDomClean = () => {
  useEffect(() => {
    document.documentElement.removeAttribute('style')
    document.body.removeAttribute('style')
  }, [])
}

export default useDomClean

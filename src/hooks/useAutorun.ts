import { autorun } from 'mobx'
import { useEffect } from 'react'

const useAutorun = (fn: () => void): void => {
  useEffect(() => {
    const handler = autorun(fn)
    return (): void => { handler() }
  }, [])
}

export default useAutorun

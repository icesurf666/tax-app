import AppContext from 'context/appContext'
import { useContext } from 'react'
import InfoStore from 'store/infoStore'

const useInfoStore = (): InfoStore => {
  const { info } = useContext(AppContext)
  return info
}

export default useInfoStore

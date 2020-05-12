import AppContext from 'context/appContext'
import { useContext } from 'react'
import UlStore from 'store/ulStore'

const useUlStore = (): UlStore => {
  const { ul } = useContext(AppContext)

  return ul
}

export default useUlStore

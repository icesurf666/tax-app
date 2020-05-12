import AppContext from 'context/appContext'
import { useContext } from 'react'
import LocalityStore from 'store/localityStore'

const useLocalitiesStore = (): LocalityStore => {
  const { locality } = useContext(AppContext)
  return locality
}

export default useLocalitiesStore

import AppContext from 'context/appContext'
import { useContext } from 'react'
import RegionStore from 'store/regionStore'

const useRegionsStore = (): RegionStore => {
  const { region } = useContext(AppContext)
  return region
}

export default useRegionsStore

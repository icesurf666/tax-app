import AppContext from 'context/appContext'
import { useContext } from 'react'
import CityStore from 'store/cityStore'

const useCitiesStore = (): CityStore => {
  const { city } = useContext(AppContext)

  return city
}

export default useCitiesStore

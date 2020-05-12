import AppContext from 'context/appContext'
import { useContext } from 'react'
import AreaStore from 'store/areaStore'

const useAreas = (): AreaStore => {
  const { area } = useContext(AppContext)
  return area
}

export default useAreas

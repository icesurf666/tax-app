import AppContext from 'context/appContext'
import { useContext } from 'react'
import StreetStore from 'store/streetStore'

const useStreetsStore = (): StreetStore => {
  const { street } = useContext(AppContext)
  return street
}

export default useStreetsStore

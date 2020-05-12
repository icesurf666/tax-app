import AppContext from 'context/appContext'
import { useContext } from 'react'
import TypeOfAddressStore from 'store/typeOfAddressStore'

const useTypeOfAddressStore = (): TypeOfAddressStore => {
  const { typeOfAddress } = useContext(AppContext)
  return typeOfAddress
}

export default useTypeOfAddressStore

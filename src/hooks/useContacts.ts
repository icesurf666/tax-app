import AppContext from 'context/appContext'
import { useContext } from 'react'
import ContactStore from 'store/contactStore'

const useContactsStore = (): ContactStore => {
  const { contact } = useContext(AppContext)

  return contact
}

export default useContactsStore

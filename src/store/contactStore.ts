import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class ContactStore {

  @persist('object') @observable public contacts: IContact[] = []

  @action.bound
  addContact(contact: IContact): void {
    this.contacts = uniqBy([...this.contacts, contact], 'id')
  }

  @action.bound
  updateContact(contact: IContact): void {
    const data = this.contacts.map((item) => {
      if(item.id === contact.id) {
        item = contact
      }
      return item
    })
    this.contacts = data
  }

  @action.bound
  removeContact(id: string): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

}

export default ContactStore

import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class TypeOfAddressStore {

  @persist('object') @observable public typeOfAddresses: IOption[] = []

  @action.bound
  addtypeOfAddress(typeOfAddress: IOption): void {
    this.typeOfAddresses = uniqBy([...this.typeOfAddresses, typeOfAddress], 'id')
  }

  @action.bound
  updatetypeOfAddress(typeOfAddress: IOption): void {
    const data = this.typeOfAddresses.map((item) => {
      if(item.id === typeOfAddress.id) {
        item = typeOfAddress
      }
      return item
    })
    this.typeOfAddresses = data
  }

  @action.bound
  removetypeOfAddress(id: string): void {
    this.typeOfAddresses = this.typeOfAddresses.filter(typeOfAddress => typeOfAddress.id !== id)
  }
}

export default TypeOfAddressStore

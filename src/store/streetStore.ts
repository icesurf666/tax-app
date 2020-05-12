import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class StreetStore {

  @persist('object') @observable public streets: IOption[] = []

  @action.bound
  addStreet(street: IOption): void {
    this.streets = uniqBy([...this.streets, street], 'id')
  }

  @action.bound
  updateStreet(street: IOption): void {
    const data = this.streets.map((item) => {
      if(item.id === street.id) {
        item = street
      }
      return item
    })
    this.streets = data
  }

  @action.bound
  removeStreet(id: string): void {
    this.streets = this.streets.filter(street => street.id !== id)
  }
}

export default StreetStore

import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class LocalityStore {

  @persist('object') @observable public localities: IOption[] = []

  @action.bound
  addLocality(locality: IOption): void {
    this.localities = uniqBy([...this.localities, locality], 'id')
  }

  @action.bound
  updateLocality(locality: IOption): void {
    const data = this.localities.map((item) => {
      if(item.id === locality.id) {
        item = locality
      }
      return item
    })
    this.localities = data
  }

  @action.bound
  removeLocality(id: string): void {
    this.localities = this.localities.filter(locality => locality.id !== id)
  }

}

export default LocalityStore

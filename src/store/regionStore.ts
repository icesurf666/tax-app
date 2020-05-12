import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class RegionStore {

  @persist('object') @observable public regions: IRegion[] = []

  @action.bound
  addRegion(region: IRegion): void {
    this.regions = uniqBy([...this.regions, region], 'id')
  }

  @action.bound
  updateRegion(region: IRegion): void {
    const data = this.regions.map((item) => {
      if(item.id === region.id) {
        item = region
      }
      return item
    })
    this.regions = data
  }

  @action.bound
  removeRegion(id: string): void {
    this.regions = this.regions.filter(region => region.id !== id)
  }

}

export default RegionStore

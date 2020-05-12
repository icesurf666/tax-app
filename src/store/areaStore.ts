import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class AreaStore {

  @persist('object') @observable public areas: IOption[] = []

  @action.bound
  addArea(area: IOption): void {
    this.areas = uniqBy([...this.areas, area], 'id')
  }

  @action.bound
  updateArea(area: IOption): void {
    const data = this.areas.map((item) => {
      if(item.id === area.id) {
        item = area
      }
      return item
    })
    this.areas = data
  }

  @action.bound
  removeArea(id: string): void {
    this.areas = this.areas.filter(area => area.id !== id)
  }

}

export default AreaStore

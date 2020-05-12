import { action, observable, computed } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class InfoStore {

  @persist('object') @observable public info: IInfo[] = []

  @persist @observable public selectDate: string | null = null

  @persist @observable isSelectedDate: boolean = false

  @computed get getInfo(): IInfo[] {
    const infoDate = this.info.filter((item) => item.dateOfStart === this.selectDate)
    if(this.isSelectedDate) {
      return infoDate || []
    } 
    return this.info

  }

  @action.bound
  addSelectedDate(date: string) {
    this.selectDate = date
  }

  @action.bound
  switchIsSelected(isSelected: boolean) {
    this.isSelectedDate = isSelected
  }

  @action.bound
  addInfo(info: IInfo): void {
    this.info = uniqBy([...this.info, info], 'id')
  }

  @action.bound
  updateInfo(info: IInfo): void {
    const data = this.info.map((item) => {
      if(item.id === info.id) {
        item = info
      }
      return item
    })
    this.info = data
  }

  @action.bound
  removeInfo(id: string): void {
    this.info = this.info.filter(area => area.id !== id)
  }

}

export default InfoStore

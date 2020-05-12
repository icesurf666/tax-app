import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class UlStore {

  @persist('object') @observable public Uls: IUl[] = []

  @persist @observable public selectId: string | null = null

  @action.bound
  addSelectId(id: string)  {
    this.selectId = id
  }

  @action.bound
  addUl(Ul: IUl): void {
    this.Uls = uniqBy([...this.Uls, Ul], 'id')
  }

  @action.bound
  updateUl(Ul: IUl): void {
    const data = this.Uls.map((ul) => {
      if(ul.id === Ul.id) {
        ul = Ul
      }
      return ul
    })
    this.Uls = data
  }

  @action.bound
  removeUl(id: number): void {
    this.Uls = this.Uls.filter(ul => ul.id !== id)
  }

}

export default UlStore

import { action, observable } from 'mobx'
import { persist } from "mobx-persist"
import uniqBy from 'lodash/uniqBy'

class CityStore {

  @persist('object') @observable public cities: ICity[] = []

  @action.bound
  addCity(city: ICity): void {
    this.cities = uniqBy([...this.cities, city], 'id')
  }

  @action.bound
  updateCity(city: ICity): void {
    const data = this.cities.map((item) => {
      if(item.id === city.id) {
        item = city
      }
      return item
    })
    this.cities = data
  }

  @action.bound
  removeCity(id: string): void {
    this.cities = this.cities.filter(city => city.id !== id)
  }

}

export default CityStore

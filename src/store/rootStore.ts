import { create } from 'mobx-persist'
import UlStore from './ulStore'
import CityStore from './cityStore'
import RegionStore from './regionStore'
import StreetStore from './streetStore'
import TypeOfAddressStore from './typeOfAddressStore'
import AreaStore from './areaStore'
import LocalityStore from './localityStore'
import InfoStore from './infoStore'

const hydrate = create({
  storage: localStorage,
  jsonify: true,
})

class RootStore {
  public ul: UlStore
  public city: CityStore
  public region: RegionStore
  public locality: LocalityStore
  public street: StreetStore
  public typeOfAddress: TypeOfAddressStore
  public area: AreaStore
  public info: InfoStore

  constructor() {
    this.ul = new UlStore()
    this.city = new CityStore()
    this.region = new RegionStore()
    this.locality = new LocalityStore()
    this.street = new StreetStore()
    this.typeOfAddress = new TypeOfAddressStore()
    this.area = new AreaStore()
    this.info = new InfoStore()


    Promise.all([
      hydrate('Ul', this.ul),
      hydrate('city', this.city),
      hydrate('region', this.region),
      hydrate('locality', this.locality),
      hydrate('street', this.street),
      hydrate('typeOfAddress', this.typeOfAddress),
      hydrate('area', this.area),
      hydrate('info', this.info)
    ])
  }

}

export default RootStore
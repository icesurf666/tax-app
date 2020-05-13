declare interface IUl {
  id: number;
  ogrn: number;
  inn: number;
  kpp: number
}

declare interface IOption {
  id: string
  name: string
}

declare interface ICity {
  id: string
  name: string
}

declare interface IRegion {
  id: string
  name: string
}

declare interface IStreet {
  id: string
  name: string
}

declare interface ITypeOfAddress {
  id: string
  name: string
}

declare interface IArea {
  id: string
  name: string
}

declare interface ILocation {
  id: string
  name: string
}

declare interface IInfo {
  id: string
  UlId: string
  dateOfStart: string
  dateOfEnd: string
  name: string
  typeOfAddresId: string
  zip: number
  regionId: string
  cityId: string
  areaId: string
  localityId: string
  streetId: string
  numberBuild: number
  kv: number
  contactId: string
}

declare interface IContact {
  id: string
  codeCity: number
  phoneNumber: number
  fax: number
}
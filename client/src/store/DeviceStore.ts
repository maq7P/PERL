import { makeAutoObservable } from "mobx"

export interface IIdWithName {
  id: number
  name: string
}
export interface IType extends IIdWithName {}
export interface IBrand extends IIdWithName {}
export interface IDevice extends IIdWithName {
  price: number
  rating: number
  name: string
  img: string
}

interface ISelectedType {
  id: number | string
  name?: string
}

export interface IUserStore {
  _types: IType[]
  _brands: IBrand[]
  _devices: IDevice[]
  _selectedType: ISelectedType
  _selectedBrand: ISelectedType
}
export default class DeviceStore implements IUserStore {
  _types = [
    { id: 1, name: "Холодильники" },
    { id: 2, name: "Смартфоны" },
    { id: 3, name: "Ноутбуки" },
    { id: 4, name: "Телевизоры" },
  ]
  _brands = [
    { id: 1, name: "Samsung" },
    { id: 2, name: "Apple" },
  ]
  _devices = [
    { id: 1, name: "Iphone 12 pro", price: 120000, rating: 5, img: "" },
    { id: 2, name: "Iphone 10", price: 70000, rating: 4, img: "" },
  ]
  _selectedType = {} as ISelectedType
  _selectedBrand = {} as ISelectedType

  constructor() {
    makeAutoObservable(this)
  }

  setBrands(brands: IUserStore["_brands"]) {
    this._brands = brands
  }
  setTypes(types: IUserStore["_types"]) {
    this._types = types
  }
  setUser(devices: IUserStore["_devices"]) {
    this._devices = devices
  }
  setSelectedType(type: IUserStore["_selectedType"]) {
    this._selectedType = type
  }
  setSelectedBrand(type: IUserStore["_selectedBrand"]) {
    this._selectedBrand = type
  }

  get devices() {
    return this._devices
  }
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}

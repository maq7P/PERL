import { makeAutoObservable } from "mobx"
import { IBrand, IDevice, IType } from "../types/device"

export interface IUserStore {
  _types: IType[]
  _brands: IBrand[]
  _devices: IDevice[]
  _selectedType: IType
  _selectedBrand: IBrand
}
export default class DeviceStore implements IUserStore {
  _types = [] as IUserStore["_types"]
  _brands = [] as IUserStore["_brands"]
  _devices = [] as IUserStore["_devices"]
  _selectedType = {} as IUserStore["_selectedType"]
  _selectedBrand = {} as IUserStore["_selectedBrand"]

  constructor() {
    makeAutoObservable(this)
  }

  setBrands(brands: IUserStore["_brands"]) {
    this._brands = brands
  }
  setTypes(types: IUserStore["_types"]) {
    this._types = types
  }
  setDevices(devices: IUserStore["_devices"]) {
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

import { makeAutoObservable } from "mobx"
import { IBrand, IDevice, IType } from "../types/device"

export interface IUserStore {
  _types: IType[]
  _brands: IBrand[]
  _devices: IDevice[]
  _selectedType: IType
  _selectedBrand: IBrand
  _page: number
  _totalCount: number
}
export default class DeviceStore implements IUserStore {
  _types = [] as IUserStore["_types"]
  _brands = [] as IUserStore["_brands"]
  _devices = [] as IUserStore["_devices"]
  _selectedType = {} as IUserStore["_selectedType"]
  _selectedBrand = {} as IUserStore["_selectedBrand"]
  _page = 1
  _totalCount = 0
  _limit = 4

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
    this.setPage(1)
    this._selectedType = type
  }
  setSelectedBrand(type: IUserStore["_selectedBrand"]) {
    this.setPage(1)
    this._selectedBrand = type
  }
  setPage(page: number) {
    this._page = page
  }
  setTotalCount(totalCount: number) {
    this._totalCount = totalCount
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
  get page() {
    return this._page
  }
  get totalCount() {
    return this._totalCount
  }
  get limit() {
    return this._limit
  }
}

import { makeAutoObservable } from "mobx"

export interface IUserStore {
  _isAuth: boolean
  _userData: any
}
export default class UserStore implements IUserStore {
  _isAuth = true
  _userData = {}
  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool: IUserStore["_isAuth"]) {
    this._isAuth = bool
  }
  setUser(user: IUserStore["_userData"]) {
    this._userData = user
  }

  get isAuth() {
    return this._isAuth
  }
  get userData() {
    return this._userData
  }
}

import { makeAutoObservable } from "mobx"
import { IUser } from "../types/user"

export interface IUserStore {
  _isAuth: boolean
  _userData: IUser
}
export default class UserStore implements IUserStore {
  _isAuth = false
  _userData = {} as IUserStore["_userData"]
  constructor() {
    makeAutoObservable(this)
  }

  setIsAuth(bool: IUserStore["_isAuth"]) {
    if (!bool) {
      localStorage.removeItem("token")
    }
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

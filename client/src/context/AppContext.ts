import { createContext } from "react"
import UserStore from "../store/UserStore"
import DeviceStore from "../store/DeviceStore"

interface IAppContext {
  user: UserStore
  device: DeviceStore
}

const AppContext = createContext<IAppContext>({
  user: {} as UserStore,
  device: {} as DeviceStore,
})

export default AppContext

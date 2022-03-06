import { createContext } from "react"
import UserStore from "../store/UserStore"

const AppContext = createContext<{ user: UserStore } | null>(null)

export default AppContext

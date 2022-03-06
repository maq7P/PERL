import React from "react"
import ReactDOM from "react-dom"

import AppContext from "./context/AppContext"
import UserStore from "./store/UserStore"

import App from "./App"

ReactDOM.render(
  <AppContext.Provider
    value={{
      user: new UserStore(),
    }}
  >
    <App />
  </AppContext.Provider>,
  document.getElementById("root"),
)

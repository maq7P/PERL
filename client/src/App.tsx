import React, { useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"

import AppContext from "./context/AppContext"

import { check } from "./api/userApi"

import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"
import { Spinner } from "react-bootstrap"
import { observer } from "mobx-react-lite"

const App = observer(() => {
  const { user } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App

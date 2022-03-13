import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { observer } from "mobx-react-lite"

import { privateRoutes, publicRoutes } from "../routes"
import { SHOP_ROUTE } from "../utils/constants"
import AppContext from "../context/AppContext"

const AppRouter = observer(() => {
  const { user } = useContext(AppContext)

  const isAdmin = user.userData.role === "ADMIN"

  return (
    <Routes>
      {user.isAuth &&
        isAdmin &&
        privateRoutes.map(({ Component, path }, idx) => (
          <Route key={`${path} - ${idx}`} element={<Component />} path={path} />
        ))}
      {publicRoutes.map(({ Component, path }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  )
})

export default AppRouter

import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routes"
import { SHOP_ROUTE } from "../utils/constants"

const AppRouter = () => {
  const isAuth = false

  return (
    <Routes>
      {isAuth &&
        privateRoutes.map(({ Component, path }, idx) => (
          <Route key={`${path} - ${idx}`} element={<Component />} path={path} />
        ))}
      {publicRoutes.map(({ Component, path }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter

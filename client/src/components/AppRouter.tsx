import React from "react"
import { Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routes"
import { Basket } from "../pages"

const AppRouter = () => {
  const isAuth = false

  return (
    <Routes>
      {isAuth &&
        privateRoutes.map(({ Component, path }, idx) => {
          console.log(path)
          return (
            <Route
              key={`${path} - ${idx}`}
              element={<Component />}
              path={path}
            />
          )
        })}
      {publicRoutes.map(({ Component, path }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}

      <Route element={<>404</>} path="*" />
    </Routes>
  )
}

export default AppRouter

import React, { useContext } from "react"
import { observer } from "mobx-react-lite"

import { Card, Row } from "react-bootstrap"

import AppContext from "../context/AppContext"

const BrandBar = observer(() => {
  const { device } = useContext(AppContext)

  return (
    <Row className="d-flex justify-content-between flex-row">
      {device.brands.map(brand => {
        const isActive = brand.id === device.selectedBrand.id

        return (
          <Card
            style={{
              cursor: "pointer",
              maxWidth: 200,
              background: isActive ? "black" : "blueviolet",
              color: "white",
            }}
            key={brand.id}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={isActive ? "dark" : "light"}
          >
            {brand.name}
          </Card>
        )
      })}
    </Row>
  )
})

export default BrandBar

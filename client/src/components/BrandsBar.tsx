import React, { useContext } from "react"
import { observer } from "mobx-react-lite"

import { Card, Row } from "react-bootstrap"

import AppContext from "../context/AppContext"

const BrandBar = observer(() => {
  const { device } = useContext(AppContext)

  console.log("device.brands: ", device.brands)
  return (
    <Row className="d-flex">
      {device.brands.map(brand => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar

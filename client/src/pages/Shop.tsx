import React, { useContext, useEffect } from "react"

import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { observer } from "mobx-react-lite"

import TypeBar from "../components/TypeBar"
import AppContext from "../context/AppContext"
import BrandBar from "../components/BrandsBar"
import DeviceList from "../components/DeviceList"
import { fetchBrands, fetchDevices, fetchTypes } from "../api/deviceApi"

const Shop = observer(() => {
  const { device } = useContext(AppContext)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices().then(data => device.setDevices(data.rows))
  }, [])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop

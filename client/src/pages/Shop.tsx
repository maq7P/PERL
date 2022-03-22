import React, { useContext, useEffect } from "react"

import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { observer } from "mobx-react-lite"

import TypeBar from "../components/TypeBar"
import AppContext from "../context/AppContext"
import BrandBar from "../components/BrandsBar"
import DeviceList from "../components/DeviceList"
import {fetchBrands, fetchDevices, fetchOneRating, fetchTypes} from "../api/deviceApi"
import Pages from "../components/Pages"

const Shop = observer(() => {
  const { device } = useContext(AppContext)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices({ limit: device.limit, page: device.page }).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
    fetchOneRating(1).then(data => console.log(data))
  }, [])

  useEffect(() => {
    fetchDevices({
      limit: device.limit,
      page: device.page,
      brandId: device.selectedBrand.id,
      typeId: device.selectedType.id,
    }).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop

import React, { useContext } from "react"

import { observer } from "mobx-react-lite"
import { Row } from "react-bootstrap"

import AppContext from "../context/AppContext"

import DeviceItem from "./DeviceItem"

const DeviceList = observer(() => {
  const { device } = useContext(AppContext)

  return (
    <Row className="d-flex">
      {device.devices.map(device => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  )
})

export default DeviceList

import React, { FC } from "react"
import { Card, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"

import { useNavigate } from "react-router-dom"
// @ts-ignore
import star from "../assets/star.png"

import { IDevice } from "../types/device"
import { DEVICE_ROUTE } from "../utils/constants"

interface IDeviceItem {
  device: IDevice
}

const DeviceItem: FC<IDeviceItem> = ({ device }) => {
  const navigate = useNavigate()

  return (
    <Col
      md={3}
      className={"mt-3"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={200}
          height={200}
          src={process.env.REACT_APP_API_URL + device.img}
          alt="картинка"
          style={{ objectFit: "contain" }}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  )
}

export default DeviceItem

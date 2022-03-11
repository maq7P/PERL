import React, { FC, useContext, useState } from "react"
import { observer } from "mobx-react-lite"

import Modal from "react-bootstrap/Modal"
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap"

import AppContext from "../../context/AppContext"

import { IModal } from "./types"

interface IInfo {
  title: string
  description: string
  number: any
}
const CreateDevice: FC<IModal> = observer(({ show, onHide }) => {
  const { device } = useContext(AppContext)
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [info, setInfo] = useState<IInfo[]>([])

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }])
  }
  const removeInfo = (number: IInfo[]) => {
    setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key: keyof IInfo, value: string, number: IInfo[]) => {
    setInfo(info.map(i => (i.number === number ? { ...i, [key]: value } : i)))
  }

  const addDevice = () => {}

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Выберите тип"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control className="mt-3" type="file" />
          <hr />
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map(i => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={e => changeInfo("title", e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={e =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant={"outline-danger"}
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
})

export default CreateDevice

import React, { FC, useState } from "react"

import Modal from "react-bootstrap/Modal"
import { Button, Form } from "react-bootstrap"

import { IModal } from "./types"
import { createBrand } from "../../api/deviceApi"

const CreateBrand: FC<IModal> = ({ show, onHide }) => {
  const [value, setValue] = useState("")

  const addBrand = () => {
    createBrand({ name: value }).then(() => {
      setValue("")
      onHide?.()
    })
  }
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand

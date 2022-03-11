import React, { FC, useState } from "react"
import Modal from "react-bootstrap/Modal"
import { Form, Button } from "react-bootstrap"

import { IModal } from "./types"

const CreateType: FC<IModal> = ({ show, onHide }) => {
  const [value, setValue] = useState("")

  const addType = () => {
    console.log("")
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
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
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType

import React, { useContext, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

import { registration, login } from "../api/userApi"
import AppContext from "../context/AppContext"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants"
import { observer } from "mobx-react-lite"

const Auth = observer(() => {
  const { user } = useContext(AppContext)
  const location = useLocation()

  // const signIn = async () => {
  //   const response = await registration()
  // }

  const [password, setPassword] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const isLogin = location.pathname === LOGIN_ROUTE

  const handleClick = async () => {
    let user

    if (isLogin) {
      user = await login(email, password)
    } else {
      user = await registration(email, password, "ADMIN")
    }

    console.log(user)
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button
              variant={"outline-success"}
              onClick={handleClick}
              style={{ marginTop: 16 }}
            >
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth

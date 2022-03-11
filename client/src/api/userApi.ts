import { $host, $authHost } from "./index"
import jwt_decode from "jwt-decode"

type TRole = "USER" | "ADMIN"

interface IJwtDecode {
  id: number
  email: string
  role: TRole
  iat: number
  exp: number
}

export const registration = async (
  email: string,
  password: string,
  role: TRole,
): Promise<IJwtDecode> => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role,
  })

  return jwt_decode(data.token)
}

export const login = async (
  email: string,
  password: string,
): Promise<IJwtDecode> => {
  const { data } = await $host.post("api/user/login", {
    email,
    password,
  })

  return jwt_decode(data.token)
}

export const check = async () => await $host.get("api/user/check")

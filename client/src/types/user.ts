export type TRole = "USER" | "ADMIN"

export interface IUser {
  id: number
  email: string
  role: TRole
  iat: number
  exp: number
}

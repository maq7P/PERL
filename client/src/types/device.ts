export interface IIdWithName {
  id?: number
  name: string
}
export interface IType extends IIdWithName {}
export interface IBrand extends IIdWithName {}
export interface IDevice extends IIdWithName {
  price: number
  rating: number
  name: string
  img: string
  typeId?: string
  brandId?: string
  info?: any[]
}

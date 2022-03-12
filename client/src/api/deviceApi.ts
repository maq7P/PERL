import { $host, $authHost } from "./index"
import { IBrand, IType } from "../types/device"

export const createType = async (type: string): Promise<IType> => {
  const { data } = await $authHost.post("api/type", {
    type,
  })

  return data
}

export const fetchTypes = async (): Promise<IType[]> => {
  const { data } = await $host.get("api/type")

  return data
}

export const createBrand = async (type: string): Promise<IBrand> => {
  const { data } = await $authHost.post("api/brand", {
    type,
  })

  return data
}

export const fetchBrands = async (): Promise<IBrand[]> => {
  const { data } = await $host.get("api/brand")

  return data
}

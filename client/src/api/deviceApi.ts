import { $host, $authHost } from "./index"
import { IBrand, IDevice, IType } from "../types/device"

export const createType = async (type: IType): Promise<IType> => {
  const { data } = await $authHost.post("api/type", type)

  return data
}

export const fetchTypes = async (): Promise<IType[]> => {
  const { data } = await $host.get("api/type")

  return data
}

export const createBrand = async (type: IBrand): Promise<IBrand> => {
  const { data } = await $authHost.post("api/brand", type)

  return data
}

export const fetchBrands = async (): Promise<IBrand[]> => {
  const { data } = await $host.get("api/brand")

  return data
}

export const createDevice = async (type: string): Promise<IDevice> => {
  const { data } = await $authHost.post("api/device", {
    type,
  })

  return data
}

export const fetchDevices = async (): Promise<{
  rows: IDevice[]
  count: number
}> => {
  const { data } = await $host.get("api/device")

  return data
}

export const fetchOneDevice = async (id: string): Promise<IDevice> => {
  const { data } = await $host.get("api/device/" + id)

  return data
}

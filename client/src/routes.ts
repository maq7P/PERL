import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constants"

import { Admin, DevicePage, Shop, Auth } from "./pages"

export const privateRoutes = [
  {
    Component: Admin,
    path: ADMIN_ROUTE,
  },
  {
    Component: Admin,
    path: BASKET_ROUTE,
  },
]

export const publicRoutes = [
  {
    Component: Shop,
    path: SHOP_ROUTE,
  },
  {
    Component: Auth,
    path: LOGIN_ROUTE,
  },
  {
    Component: Auth,
    path: REGISTRATION_ROUTE,
  },
  {
    Component: DevicePage,
    path: `${DEVICE_ROUTE}/:id`,
  },
]

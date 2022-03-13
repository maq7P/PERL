import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Pagination } from "react-bootstrap"

import AppContext from "../context/AppContext"

const Pages = observer(() => {
  const { device } = useContext(AppContext)
  const pages = Array.from(
    { length: Math.ceil(device.totalCount / device.limit) },
    (_, i) => i + 1,
  )
  const handleChangePage = (page: number) => {
    if (device.page !== page) {
      device.setPage(page)
    }
  }
  return (
    <Pagination className="mt-5">
      {pages.map(page => (
        <Pagination.Item
          active={device.page === page}
          onClick={() => handleChangePage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  )
})

export default Pages

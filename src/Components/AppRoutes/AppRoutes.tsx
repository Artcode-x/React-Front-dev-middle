import React from "react"
import { Route, Routes } from "react-router-dom"
import Main from "../../Pages/Main/Main"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  )
}
export default AppRoutes

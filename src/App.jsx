import React from 'react'
import Nav from './Componenets/Nav'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App
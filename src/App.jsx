import React from 'react'
import { Route, Routes } from 'react-router'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Hola mundo</h1>} />
        <Route path='/login'  element={<h1>Hola mundo</h1>} />
      </Routes>
    </>
  )
}

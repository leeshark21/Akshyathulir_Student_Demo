import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Settings from './settings'

const SettingRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/Settings' element={<Settings/>}/>
      </Routes>
    </>
  )
}

export default SettingRoute

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Reports from './Reports'

const ReportsRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/Reports' element={<Reports/>}/>
    </Routes>
      
    </>
  )
}

export default ReportsRoutes

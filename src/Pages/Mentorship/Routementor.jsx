import React from 'react'
import Tabmentor from './Tabsmentor'
import { Routes } from 'react-router'

const Routementor = () => {
  return (
    <>
    <Routes>
        <Routes path='/Mentors' element={<Tabmentor />}/>
    </Routes>
     
      
    </>
  )
}

export default Routementor

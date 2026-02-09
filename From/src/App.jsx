import React from 'react'
import PageBelow from './Pages/PageBelow'
import { Routes, Route } from 'react-router-dom'
import ReviewPage from './Pages/Pages1/ReviewPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<PageBelow/>}/>
      <Route path='/review' element={<ReviewPage/>}/>
    </Routes>
      
    </>
  )
}

export default App

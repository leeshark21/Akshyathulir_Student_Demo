import React from 'react'
import { Route, Routes } from 'react-router'
import AddMentor from './AddMentor'
import Assignmentor from './Assignmentor'
import MentorSchedule from './MentorSchedule'
import UploadResource from './UploadResource'
import Siderbar from '../../Components/Sidebar'

const MentorRoute = () => {
  return (
    <>
    
      <Routes>
        
        <Route path='/AddMentor' element={<AddMentor/>}/>
        <Route path='/AssignStartup' element={<Assignmentor/>}/>
        <Route path='/ScheduleSession' element={<MentorSchedule/>}/>
        <Route  path='/UploadResource' element={<UploadResource/>}/>
      </Routes>
    </>
  )
}

export default MentorRoute

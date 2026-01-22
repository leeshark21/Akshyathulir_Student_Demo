import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Grid from '@mui/material/Grid'
import Siderbar from '../Components/Sidebar'
import MyStartup from '../Pages/Startup/My Startup/MyStartup'
import AllStartups from '../Pages/Startup/All Startups/AllStartups'
import ApplyIncubation from '../Pages/Startup/Apply for Incubation/ApplyIncubation'
import AppliacationStatus from '../Pages/Startup/ApplicationStatus/AppliacationStatus'
import StartupProfile from '../Pages/Startup/StartupProfiles/StartupProfile'

const AppRoutes = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Dashboard />} />
         <Route path='/MyStartup' element={<MyStartup />} />
         <Route path='/AllStartups' element={<AllStartups />} />
         <Route path='/ApplyforIncubation' element={<ApplyIncubation />} />
         <Route path='/ApplicationStatus' element={<AppliacationStatus />} />
         <Route path='/StartupProfile' element={<StartupProfile />} />
       </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes


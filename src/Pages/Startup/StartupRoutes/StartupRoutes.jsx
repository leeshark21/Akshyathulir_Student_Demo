import React from 'react'
import { Route, Routes } from 'react-router'
import AllStartups from '../All Startups/AllStartups'
import AppliacationStatus from '../ApplicationStatus/AppliacationStatus'
import StartupProfile from '../StartupProfiles/StartupProfile'
import ApplyIncubation from '../Apply for Incubation/ApplyIncubation'
import MyStartup from '../My Startup/MyStartup'
import MyStartupHeader from '../StartupMenu/StartupMenu'
import StartupMenu from '../StartupMenu/StartupMenu'

const StartupRoutes = () => {
  return (
    <div>
        

        <Routes>
            <Route path='/Startups' element={<StartupMenu/>}/> 
            <Route path='/MyStartupHeader' element={<MyStartupHeader/>}/>
            <Route path='/MyStartup' element={<MyStartup/>}/>
            <Route path='/AllStartups' element={<AllStartups/>}/>
            <Route path='/AppliacationStatus' element={<AppliacationStatus/>}/>
            <Route path='/StartupProfile' element={<StartupProfile/>}/>
            <Route path='/ApplyIncubation' element={<ApplyIncubation/>}/>

        </Routes>
      
    </div>
  )
}

export default StartupRoutes

import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Box from '@mui/material/Box'
import Dashboard from './Pages/Dashboard/Dashboard'
import Overview from './Pages/Dashboard/Overview'
import DailyStats from './Pages/Dashboard/DailyStats'
import Notification from './Pages/Dashboard/Notification'
import QuickActions from './Pages/Dashboard/QuickActions'
import Siderbar from './Components/Sidebar'
import MyStartup from './Pages/Startup/My Startup/MyStartup'
import AllStartups from './Pages/Startup/All Startups/AllStartups'
import ApplyIncubation from './Pages/Startup/Apply for Incubation/ApplyIncubation'
import AppliacationStatus from './Pages/Startup/ApplicationStatus/AppliacationStatus'
import StartupProfile from './Pages/Startup/StartupProfiles/StartupProfile'
import StartupMenu from './Pages/Startup/StartupMenu/StartupMenu'
import Reports from './Pages/Reports/Reports'
import Routementor from './Pages/Mentorship/Routementor'
import Settings from './Pages/settings/settings'

// Layout component for sidebar + content
const MainLayout = ({ openSidebar, toggleDrawer }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Siderbar open={openSidebar} toggleDrawer={toggleDrawer} />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenSidebar(open);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar openSidebar={openSidebar} toggleDrawer={toggleDrawer} />
        <Box sx={{ flex: 1 }}>
          <Routes>
            {/* Redirect root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Dashboard routes */}
            <Route path="/dashboard" element={<MainLayout openSidebar={openSidebar} toggleDrawer={toggleDrawer} />}>
              <Route index element={<Dashboard openSidebar={openSidebar} />} />
              <Route path="overview" element={<Overview openSidebar={openSidebar} />} />
              <Route path="daily-stats" element={<DailyStats openSidebar={openSidebar} />} />
              <Route path="notification" element={<Notification openSidebar={openSidebar} />} />
              <Route path="quick-action" element={<QuickActions openSidebar={openSidebar} />} />
            </Route>

            {/* Startup routes */}
            <Route path="/startups" element={<StartupMenu openSidebar={openSidebar} toggleDrawer={toggleDrawer} />}>
              <Route index element={<StartupMenu />} />
              <Route path="menu" element={<StartupMenu />} />
              <Route path="all" element={<AllStartups />} />
              <Route path="my-startup" element={<MyStartup />} />
              <Route path="apply-incubation" element={<ApplyIncubation />} />
              <Route path="status" element={<AppliacationStatus />} />
              <Route path="profile" element={<StartupProfile />} />
            </Route>

            {/* Settings routes */}
            <Route path="/settings" element={<MainLayout openSidebar={openSidebar} toggleDrawer={toggleDrawer} />}>
              <Route index element={<Settings />} />
            </Route>

            {/* Reports routes */}
            <Route path="/reports" element={<MainLayout openSidebar={openSidebar} toggleDrawer={toggleDrawer} />}>
              <Route index element={<Reports />} />
            </Route>

            {/* Mentorship routes */}
            <Route path="/mentorship" element={<MainLayout openSidebar={openSidebar} toggleDrawer={toggleDrawer} />}>
              <Route index element={<Routementor />} />
            </Route>

            {/* Catch-all: redirect unknown routes to dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App

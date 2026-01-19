import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Overview from '../Overview';
import DailyStats from '../DailyStats';
import Notification from '../Notification';
import QuickActions from '../QuickActions';
import Dashboard from '../Dashboard';
import Box from '@mui/material/Box';
import Siderbar from '../../../Components/Sidebar';
import Navbar from '../../../Components/Navbar';

const DashRouter = ({ openSidebar, toggleDrawer }) => {
  return (
    <>
      <Siderbar open={openSidebar} toggleDrawer={toggleDrawer} />
      <Dashboard openSidebar={openSidebar}/>
      
       
      <Routes>
        
        <Route path="/Dashboard" element={<Dashboard openSidebar={openSidebar}  />} />
       
      
        <Route path="/Overview" element={<Overview openSidebar={openSidebar} />} />
        <Route path="/DailyStats" element={<DailyStats openSidebar={openSidebar} />} />
        <Route path="/Notification" element={<Notification openSidebar={openSidebar} />} />
        <Route path="/QuickAction" element={<QuickActions openSidebar={openSidebar} />} />
      </Routes>
    </>
  );
};

export default DashRouter;

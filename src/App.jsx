import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import DashRouter from "./Pages/Dashboard/Dasboardrouter/DashRouter"
import Box from '@mui/material/Box'

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
        <Box >

          <DashRouter openSidebar={openSidebar} toggleDrawer={toggleDrawer} />
        </Box>
      </Box>
     
    </BrowserRouter>
  );
}

export default App

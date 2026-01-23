import React, { useState } from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [openSidebar, setOpenSidebar] = useState(!isMobile);

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* Navbar */}
            <Navbar openSidebar={openSidebar} toggleDrawer={toggleSidebar} />

            <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
                {/* Sidebar */}
                <Sidebar open={openSidebar} toggleDrawer={toggleSidebar} isMobile={isMobile} />

                {/* Main Content */}
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100% - ${openSidebar ? 240 : 0}px)` },
                        transition: theme.transitions.create(['width', 'margin'], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                        ml: { sm: 0 }, // Adjust if sidebar is persistent or temporary
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardLayout;

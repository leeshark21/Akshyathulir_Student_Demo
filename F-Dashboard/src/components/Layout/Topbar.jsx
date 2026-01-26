import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar, Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 260;

const Topbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: '#F4F7F5', // Match background for transparent feel or white
        backgroundColor: '#ffffff', // Clean white topbar
        color: '#1C1C1C',
        boxShadow: '0px 1px 10px rgba(0,0,0,0.05)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: '#1E4A28' }}>
          Dashboard Overview
        </Typography>
        
        <IconButton size="large" color="inherit">
          <SearchIcon />
        </IconButton>
        
        <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Admin User</Typography>
            <Typography variant="caption" color="text.secondary">Incubation Manager</Typography>
          </Box>
          <Avatar sx={{ bgcolor: '#1E4A28' }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;

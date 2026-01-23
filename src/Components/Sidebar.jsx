import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Sidebar({ open, toggleDrawer, isMobile }) {
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Startups', icon: <BusinessIcon />, path: '/startups' },
    { text: 'Mentorship', icon: <PeopleIcon />, path: '/mentorship' },
    { text: 'Programs', icon: <SchoolIcon />, path: '/programs' },
    { text: 'Funding', icon: <AttachMoneyIcon />, path: '/funding' },
    { text: 'Reports', icon: <BarChartIcon />, path: '/reports' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor='left'
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        width: 260,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 260,
          backgroundColor: '#1E4A28',
          color: 'white',
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Typography sx={{
        m: 3,
        mb: 2,
        color: 'white',
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '0.3px',
      }} variant="h5">
        Incubation Center
      </Typography>

      <List>
        {menuItems.map((item) => {
          const isSelected = location.pathname.startsWith(item.path);
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isSelected}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.18)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '0.95rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Siderbar({ open, toggleDrawer }) {

  const icons = [
    <DashboardIcon />,
    <BusinessIcon />,
    <PeopleIcon />,
    <SchoolIcon />,
    <AttachMoneyIcon />,
    <BarChartIcon />,
   
    <SettingsIcon />
  ];

  const DrawerList = (
    <Box sx={{ width: 260, px: 1 }} role="presentation">
      <List>
        {['Dashboard', 'Startups', 'Mentorship', 'Programs', 'Funding', 'Reports',  'Settings'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={Link}
              to={'/' + text}
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
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {icons[index]}
                </ListItemIcon>

              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '0.95rem',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );

  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 260,
          backgroundColor: '#1E4A28',
          color: 'white',
          height: '100vh',

          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.08)',
          overflowY: 'auto',
          '::webkit-scrollbar': {
            display: 'none',
          },
          scrollbarWidth: 'none',      // Firefox
          msOverflowStyle: 'none',
        }
      }}
    >
      <Typography sx={{
        margin: 3,
        marginBottom: 2,
        color: 'white',
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '0.3px',
      }} variant="h5">
        Incubation Center
      </Typography>
      {DrawerList}
    </Drawer>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation, Outlet } from 'react-router-dom';
import Overview from './Overview';

export default function Dashboard({ openSidebar }) {
  const location = useLocation();

  const getTabValue = React.useCallback(() => {
    switch (location.pathname) {
      case '/dashboard':
      case '/dashboard/overview':
        return 0;
      case '/dashboard/daily-stats':
        return 1;
      case '/dashboard/notification':
        return 2;
      case '/dashboard/quick-action':
        return 3;
      default:
        return 0;
    }
  }, [location.pathname]);

  const [value, setValue] = React.useState(getTabValue());

  React.useEffect(() => {
    setValue(getTabValue());
  }, [getTabValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      mt:1,
      flexGrow: 1,
      ml: openSidebar ? '240px' : '0px',
      transition: 'margin 0.3s ease',
      width: '100%',
      backgroundColor: '#f8f9fa',
      
    }}>
      <Box sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        px: { xs: 2, sm: 3, md: 4 },
        py: 0,
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dashboard navigation tabs"
          textColor="inherit"
          sx={{
            minHeight: 60,
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '3px 3px 0 0',
              backgroundColor: '#2e7d32',
            },
            '& .MuiTabs-flexContainer': {
              gap: { xs: 0, sm: 1 },
            },
          }}
        >
          {['Overview', 'Daily Stats', 'Notification', 'Quick Action'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              component={Link}
              to={`/dashboard/${label.toLowerCase().replace(' ', '-')}`}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                minHeight: 60,
                px: { xs: 2, sm: 3 },
                color: '#999',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#2e7d32',
                  backgroundColor: 'rgba(46, 125, 50, 0.02)',
                },
                '&.Mui-selected': {
                  color: '#2e7d32',
                  fontWeight: 600,
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      
      <Outlet />
    </Box>
  );
}

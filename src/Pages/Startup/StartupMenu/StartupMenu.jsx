import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation, Outlet } from 'react-router-dom';


export default function StartupMenu({ openSidebar }) {
  const location = useLocation();

  const getTabValue = React.useCallback(() => {
    switch (location.pathname) {
      case '/startups':
      case '/startups/menu':
      case '/startups/my-startup':
        return 0;
      case '/startups/all':
        return 1;
      case '/startups/apply-incubation':
        return 2;
      case '/startups/status':
        return 3;
      case '/startups/profile':
        return 4;
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
      mb: 2
      
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
              backgroundColor: '#1E4A28',
            },
            '& .MuiTabs-flexContainer': {
              gap: { xs: 0, sm: 1 },
            },
          }}
        >
          {['My Startup', 'All Startups', 'Apply for Incubation','Application Status' ,'Startup Profiles'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              component={Link}
              to={`/startups/${label.toLowerCase().replace(/\s+/g, '-')}`}
              sx={{
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                minHeight: 60,
                px: { xs: 2, sm: 3 },
                color: '#999',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#1E4A28',
                  backgroundColor: 'rgba(30, 74, 40, 0.02)',
                },
                '&.Mui-selected': {
                  color: '#1E4A28',
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


import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import TuneIcon from '@mui/icons-material/Tune';

import GeneralSettings from '../../components/Settings/GeneralSettings';
import UserManagement from '../../components/Settings/UserManagement';
import SecuritySettings from '../../components/Settings/SecuritySettings';
import ProgramSettings from '../../components/Settings/ProgramSettings';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        System Settings
      </Typography>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="settings tabs" textColor="primary" indicatorColor="primary">
          <Tab icon={<BusinessIcon />} iconPosition="start" label="Organization" />
          <Tab icon={<PeopleIcon />} iconPosition="start" label="User Management" />
          <Tab icon={<SecurityIcon />} iconPosition="start" label="Security" />
          <Tab icon={<TuneIcon />} iconPosition="start" label="Programs" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <GeneralSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserManagement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SecuritySettings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProgramSettings />
      </TabPanel>
    </Box>
  );
};

export default Settings;

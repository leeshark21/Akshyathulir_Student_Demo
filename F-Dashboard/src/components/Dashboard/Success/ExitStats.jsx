import React from 'react';
import { Card, CardContent, Typography, Box, Grid, Avatar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PublicIcon from '@mui/icons-material/Public';

const ExitStatItem = ({ label, count, icon, color }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 2, bgcolor: '#F9FAFB', borderRadius: 2 }}>
    <Avatar sx={{ bgcolor: `${color}15`, color: color, mr: 2 }}>
      {icon}
    </Avatar>
    <Box>
      <Typography variant="h5" fontWeight="bold" color="text.primary">
        {count}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  </Box>
);

const ExitStats = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Exits & Scale-ups
        </Typography>
        <Box sx={{ mt: 3 }}>
           <ExitStatItem 
             label="Acquisitions" 
             count="12" 
             icon={<StorefrontIcon />} 
             color="#1E4A28" 
           />
           <ExitStatItem 
             label="IPOs" 
             count="3" 
             icon={<PublicIcon />} 
             color="#1565C0" 
           />
           <ExitStatItem 
             label="Series B+ Scale-ups" 
             count="24" 
             icon={<RocketLaunchIcon />} 
             color="#FFC107" 
           />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExitStats;

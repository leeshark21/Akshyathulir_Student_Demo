import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';

const StatCard = ({ title, value, icon, subtext, color = 'primary.main', trend }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              {value}
            </Typography>
          </Box>
          <Avatar variant="rounded" sx={{ bgcolor: `${color}15`, color: color, width: 48, height: 48 }}>
            {icon}
          </Avatar>
        </Box>
        {subtext && (
          <Typography variant="body2" color={trend === 'up' ? 'success.main' : trend === 'down' ? 'error.main' : 'text.secondary'} sx={{ fontWeight: 500 }}>
             {subtext}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;

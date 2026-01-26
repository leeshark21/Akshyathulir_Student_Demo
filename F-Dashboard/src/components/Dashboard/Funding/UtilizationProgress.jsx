import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

const programs = [
  { name: 'DeepTech 2024', utilized: 85, color: 'success' },
  { name: 'Agri Innovation', utilized: 60, color: 'primary' },
  { name: 'Fintech Accelerator', utilized: 45, color: 'info' },
  { name: 'Women Founders', utilized: 92, color: 'warning' },
  { name: 'Student Grant', utilized: 20, color: 'secondary' },
];

const UtilizationProgress = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Budget Utilization by Program
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          {programs.map((prog) => (
            <Box key={prog.name} sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" fontWeight="bold">
                  {prog.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prog.utilized}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={prog.utilized} 
                color={prog.color} 
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UtilizationProgress;

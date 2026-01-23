import React from 'react';
import { Box, Typography } from '@mui/material';

const StartupProfile = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight="bold">Startup Profile</Typography>
      <Typography variant="body1" mt={2} color="text.secondary">
        Select a startup to view detailed profile information.
      </Typography>
    </Box>
  );
};

export default StartupProfile;

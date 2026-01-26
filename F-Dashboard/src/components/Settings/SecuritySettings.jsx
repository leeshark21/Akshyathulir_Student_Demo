import React, { useState } from 'react';
import { Card, CardContent, Typography, Switch, FormControlLabel, Button, Box, Divider, TextField } from '@mui/material';

const SecuritySettings = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState(false);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Security & Access
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Configure security protocols and password policies.
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Authentication
          </Typography>
          <FormControlLabel
            control={<Switch checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} color="primary" />}
            label="Require Two-Factor Authentication (2FA) for all admins"
          />
          <Box sx={{ mt: 1 }}>
            <FormControlLabel
              control={<Switch checked={sessionTimeout} onChange={(e) => setSessionTimeout(e.target.checked)} color="primary" />}
              label="Auto-logout inactive users after 30 minutes"
            />
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Password Policy
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
             <TextField label="Min Password Length" type="number" defaultValue={8} size="small" sx={{ width: 150 }} />
             <FormControlLabel control={<Switch defaultChecked disabled/>} label="Require Uppercase" />
             <FormControlLabel control={<Switch defaultChecked disabled/>} label="Require Special Char" />
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="contained" color="primary">Save Security Settings</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;

import React, { useState } from 'react';
import { Card, CardContent, Grid, TextField, Button, Typography, Box, Divider, MenuItem } from '@mui/material';

const timezones = [
  { value: 'UTC', label: 'UTC' },
  { value: 'EST', label: 'EST (UTC-5)' },
  { value: 'IST', label: 'IST (UTC+5:30)' },
  { value: 'PST', label: 'PST (UTC-8)' },
];

const GeneralSettings = () => {
  const [orgName, setOrgName] = useState('TechLaunch Incubation Center');
  const [timezone, setTimezone] = useState('UTC');
  const [contactEmail, setContactEmail] = useState('admin@techlaunch.org');

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Organization Profile
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Configure your incubation center's branding and regional settings.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              select
              label="Timezone"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              {timezones.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Admin Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
             <Button variant="outlined" component="label">
              Upload Logo
              <input type="file" hidden />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Recommended size: 200x50px (PNG)
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="outlined" color="inherit">Cancel</Button>
          <Button variant="contained" color="primary">Save Changes</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GeneralSettings;

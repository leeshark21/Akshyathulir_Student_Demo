import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button, Box, Chip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ProgramSettings = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Program & Workflow Configuration
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Manage program timelines and workflow rules.
        </Typography>

        <Grid container spacing={3}>
           <Grid item xs={12}>
              <Typography variant="subtitle2" gutterBottom>
                Active Programs
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                <Chip label="Summer Acceleration 2024" onDelete={() => {}} />
                <Chip label="Winter Incubation 2023" onDelete={() => {}} />
                <Chip label="Pre-Incubation 2023" onDelete={() => {}} />
                <Chip
                  icon={<AddIcon />}
                  label="Add Program"
                  onClick={() => {}}
                  color="primary"
                  variant="outlined"
                  clickable
                />
              </Box>
           </Grid>
           <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Check-in Frequency"
                defaultValue="Weekly"
                helperText="How often mentors should log sessions"
              />
           </Grid>
           <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Default Probation Period"
                defaultValue="3 Months"
                helperText="Period before performance review"
              />
           </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
          <Button variant="contained" color="primary">Update Configuration</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgramSettings;

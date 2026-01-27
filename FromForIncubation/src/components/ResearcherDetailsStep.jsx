import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  MenuItem, 
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel
} from '@mui/material';

const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const ResearcherDetailsStep = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 2 of 4: Researcher / Scientist Application Form
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section - Main Form */}
        <Grid item xs={12} md={7.5}>
          <Paper elevation={0} sx={{ 
            border: '1px solid #EEE', 
            borderRadius: '12px', 
            overflow: 'hidden',
            bgcolor: 'white'
          }}>
            <Box sx={{ bgcolor: 'primary.main', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Researcher / Scientist Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField fullWidth placeholder="Full Name" />
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Email Address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Mobile Number" />
                </Grid>
              </Grid>

              <TextField fullWidth placeholder="Institution / University / Research Organization" />
              <TextField fullWidth placeholder="Department" />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Research Area</MenuItem>
                    <MenuItem value="biotech">Biotechnology</MenuItem>
                    <MenuItem value="nanotech">Nanotechnology</MenuItem>
                    <MenuItem value="ai">Artificial Intelligence</MenuItem>
                    <MenuItem value="renewable">Renewable Energy</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Technology Readiness Level (TRL)</MenuItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                      <MenuItem key={val} value={val}>TRL {val}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ fontSize: '0.9rem', color: '#444', mb: 0.5 }}>Patent Filed?</FormLabel>
                    <RadioGroup row defaultValue="no">
                      <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ fontSize: '0.9rem', color: '#444', mb: 0.5 }}>Industry Collaboration Needed?</FormLabel>
                    <RadioGroup row defaultValue="no">
                      <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField fullWidth placeholder="Publication / Research Paper Link" />

              <TextField 
                fullWidth 
                placeholder="Lab / Equipment Requirement (Describe specifically)" 
                multiline 
                rows={3} 
                sx={{ bgcolor: 'white' }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Right Section - Support Needed */}
        <Grid item xs={12} md={4.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{ 
              border: '1px solid #EEE', 
              borderRadius: '12px', 
              overflow: 'hidden',
              boxShadow: '0px 2px 10px rgba(0,0,0,0.02)'
            }}>
              <Box sx={{ bgcolor: 'primary.main', p: '14px 20px', color: 'white' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Expected Support from Incubation</Typography>
              </Box>
              <Box sx={{ p: 2.5, bgcolor: '#F9F9F9' }}>
                <SupportOption label="Lab Access" />
                <SupportOption label="Equipment / Facility Use" />
                <SupportOption label="Funding / Grants" />
                <SupportOption label="Industry Partner Connect" />
                <SupportOption label="Patent / IP Support" />
                <SupportOption label="Technology Commercialization" />
              </Box>
            </Paper>

            <Typography variant="caption" sx={{ color: '#888', fontStyle: 'italic', px: 1 }}>
              Note: Incubation support is subject to availability and institutional guidelines.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResearcherDetailsStep;

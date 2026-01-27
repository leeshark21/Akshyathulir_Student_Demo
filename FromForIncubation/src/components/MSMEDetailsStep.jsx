import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  MenuItem, 
  Paper
} from '@mui/material';

const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const MSMEDetailsStep = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 2 of 4: MSME / Small Business Application Form
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
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>MSME / Small Business Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Business Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Owner / Founder Name" />
                </Grid>
              </Grid>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Email Address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Mobile Number" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Business Registration Type</MenuItem>
                    <MenuItem value="proprietorship">Proprietorship</MenuItem>
                    <MenuItem value="partnership">Partnership</MenuItem>
                    <MenuItem value="pvt-ltd">Pvt Ltd</MenuItem>
                    <MenuItem value="llp">LLP</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="MSME Registration Number (Optional)" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Industry Sector</MenuItem>
                    <MenuItem value="manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="services">Services</MenuItem>
                    <MenuItem value="trading">Trading</MenuItem>
                    <MenuItem value="agri-business">Agri-Business</MenuItem>
                    <MenuItem value="tech">Tech</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Years of Operation" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth placeholder="Number of Employees" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    defaultValue=""
                    displayEmpty
                  >
                    <MenuItem value="" disabled>Annual Turnover Range</MenuItem>
                    <MenuItem value="under-10l">Under 10 Lakhs</MenuItem>
                    <MenuItem value="10l-50l">10 Lakhs - 50 Lakhs</MenuItem>
                    <MenuItem value="50l-2cr">50 Lakhs - 2 Crore</MenuItem>
                    <MenuItem value="above-2cr">Above 2 Crore</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
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
                <SupportOption label="Funding / Credit Support" />
                <SupportOption label="Market Access & Sales Support" />
                <SupportOption label="Technology Upgradation" />
                <SupportOption label="Mentorship & Business Guidance" />
                <SupportOption label="Government Scheme Assistance" />
                <SupportOption label="Legal & Compliance Support" />
              </Box>
            </Paper>

            <Box sx={{ 
              p: 2.5, 
              border: '1px dashed #CADBCE', 
              borderRadius: '12px',
              bgcolor: '#F0F7F1'
            }}>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                MSME Business Note
              </Typography>
              <Typography variant="caption" sx={{ color: '#555' }}>
                Specialized programs are available for registered MSMEs seeking scale-up and modernization support.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MSMEDetailsStep;

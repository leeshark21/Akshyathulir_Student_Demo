import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import { useState } from "react";


const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const MSMEDetailsStep = () => {

  const [businessType, setBusinessType] = useState("");

  const handleChange1 = (event) => {
    setBusinessType(event.target.value);
  };

  const [industrySector, setIndustrySector] = useState("");

  const handleChange2 = (event) => {
    setIndustrySector(event.target.value);
  };

  const [annualTurnover, setAnnualTurnover] = useState("");

  const handleChange3 = (event) => {
    setAnnualTurnover(event.target.value);
  };
  return (
    <Box sx={{ border: '2px solid green' }} >

      <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>
        <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>MSME / Small Business Application Form</Typography>
      </Box>

      <Grid container spacing={3}>

        <Grid size={12} md={7.5}>
          <Paper elevation={0} sx={{

          }}>
            <Box sx={{ p: '14px 20px', }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>MSME / Small Business Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Grid container spacing={2}>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Business Name" />
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Owner / Founder Name" />
                </Grid>



                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Email Address" />
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Mobile Number" />
                </Grid>



                <Grid size={3} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="business-registration-label">
                      Business Registration Type
                    </InputLabel>

                    <Select
                      labelId="business-registration-label"
                      id="business-registration"
                      value={businessType}
                      label="Business Registration Type"
                      onChange={handleChange1}
                    >
                      <MenuItem value="" disabled>
                        Business Registration Type
                      </MenuItem>
                      <MenuItem value="proprietorship">Proprietorship</MenuItem>
                      <MenuItem value="partnership">Partnership</MenuItem>
                      <MenuItem value="pvt-ltd">Pvt Ltd</MenuItem>
                      <MenuItem value="llp">LLP</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="MSME Registration Number (Optional)" />
                </Grid>




                <Grid size={3} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="industry-sector-label">
                      Industry Sector
                    </InputLabel>

                    <Select
                      labelId="industry-sector-label"
                      id="industry-sector"
                      value={industrySector}
                      label="Industry Sector"
                      onChange={handleChange2}
                    >
                      <MenuItem value="" disabled>
                        Industry Sector
                      </MenuItem>
                      <MenuItem value="manufacturing">Manufacturing</MenuItem>
                      <MenuItem value="services">Services</MenuItem>
                      <MenuItem value="trading">Trading</MenuItem>
                      <MenuItem value="agri-business">Agri-Business</MenuItem>
                      <MenuItem value="tech">Tech</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Years of Operation" />
                </Grid>



                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Number of Employees" />
                </Grid>
                <Grid size={3} sm={6}>
                  <FormControl fullWidth>
      <InputLabel id="annual-turnover-label">
        Annual Turnover Range
      </InputLabel>

      <Select
        labelId="annual-turnover-label"
        id="annual-turnover"
        value={annualTurnover}
        label="Annual Turnover Range"
        onChange={handleChange3}
      >
        <MenuItem value="" disabled>
          Annual Turnover Range
        </MenuItem>
        <MenuItem value="under-10l">Under 10 Lakhs</MenuItem>
        <MenuItem value="10l-50l">10 Lakhs – 50 Lakhs</MenuItem>
        <MenuItem value="50l-2cr">50 Lakhs – 2 Crore</MenuItem>
        <MenuItem value="above-2cr">Above 2 Crore</MenuItem>
      </Select>
    </FormControl>
                </Grid>

              </Grid>

            </Box>
          </Paper>
        </Grid>

        {/* Right Section - Support Needed */}
        <Grid size={12} md={4.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{
              border: '1px solid #EEE',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0px 2px 10px rgba(0,0,0,0.02)'
            }}>
              <Box sx={{ p: '14px 20px', }}>
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

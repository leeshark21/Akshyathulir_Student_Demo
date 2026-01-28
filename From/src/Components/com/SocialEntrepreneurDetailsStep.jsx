import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';


import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useState } from "react";
const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const SocialEntrepreneurDetailsStep = () => {
  const [alignment, setAlignment] = React.useState('local');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

   const [problemDomain, setProblemDomain] = useState("");

  const handleChange = (event) => {
    setProblemDomain(event.target.value);
  };
  return (
    <Box sx={{border:'2px solid green',height:'100%'}} >
      <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Social Entrepreneur Application Form</Typography>
            </Box>

      <Grid container spacing={3}>
        {/* Left Section - Main Form */}
        <Grid size={12} md={7.5}>
          <Paper elevation={0} sx={{ 
           
          }}>
            <Box sx={{ p: '14px 20px', }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Social Entrepreneur Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              
              
              <Grid container spacing={2}>
                
                <Grid size={3} sm={6}>
                <TextField fullWidth placeholder="Initiative / Organization Name" />

                </Grid>
                <Grid size={3} sm={6}>

                    <TextField fullWidth placeholder="Founder Name" />

                </Grid>

             
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Email Address" />
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Mobile Number" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid size={3} sm={6}>
                    <FormControl fullWidth>
      <InputLabel id="problem-domain-label">
        Problem Domain
      </InputLabel>

      <Select
        labelId="problem-domain-label"
        id="problem-domain"
        value={problemDomain}
        label="Problem Domain"
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          Problem Domain
        </MenuItem>
        <MenuItem value="health">Health</MenuItem>
        <MenuItem value="education">Education</MenuItem>
        <MenuItem value="environment">Environment</MenuItem>
        <MenuItem value="agriculture">Agriculture</MenuItem>
        <MenuItem value="women">Women Empowerment</MenuItem>
        <MenuItem value="rural">Rural Development</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Select>
    </FormControl>
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Target Beneficiaries" />
                </Grid>
              </Grid>

              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, color: '#666' }}>Geographic Impact</Typography>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="geographic impact"
                  fullWidth
                  size="small"
                  sx={{ 
                    bgcolor: '#F9F9F9',
                    '& .MuiToggleButton-root': { 
                      borderRadius: '8px', 
                      border: 'none',
                      color: '#777',
                      '&.Mui-selected': { 
                        bgcolor: 'primary.main', 
                        color: 'white',
                        '&:hover': { bgcolor: '#15331D' }
                      } 
                    } 
                  }}
                >
                  <ToggleButton value="local">Local</ToggleButton>
                  <ToggleButton value="state">State</ToggleButton>
                  <ToggleButton value="national">National</ToggleButton>
                  <ToggleButton value="global">Global</ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Grid container spacing={2} alignItems="center">
                <Grid size={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ fontSize: '0.9rem', color: '#444', mb: 0.5 }}>Any existing NGO / Government Partnership?</FormLabel>
                    <RadioGroup row defaultValue="no">
                      <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <TextField 
                fullWidth 
                placeholder="Social Impact Description (Describe the expected impact)" 
                multiline 
                rows={3} 
                sx={{ bgcolor: 'white' }}
              />

              <TextField 
                fullWidth 
                placeholder="Revenue / Sustainability Model" 
                multiline 
                rows={2} 
                sx={{ bgcolor: 'white' }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Right Section - Support Needed */}
        <Grid size={12} md={4.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{ 
              p:1
            }}>
              <Box sx={{ p: '14px 20px'}}>
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Expected Support from Incubation</Typography>
              </Box>
              <Box sx={{ p: 2.5, bgcolor: '#F9F9F9' }}>
                <SupportOption label="Funding / Grants" />
                <SupportOption label="Mentorship & Guidance" />
                <SupportOption label="Government Scheme Support" />
                <SupportOption label="Field Implementation Support" />
                <SupportOption label="Legal & Compliance" />
                <SupportOption label="Marketing & Awareness" />
              </Box>
            </Paper>

           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialEntrepreneurDetailsStep;

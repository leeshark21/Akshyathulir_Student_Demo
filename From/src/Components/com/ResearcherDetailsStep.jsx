import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const ResearcherDetailsStep = () => {


  const [researchArea, setResearchArea] = useState("");

  const handleChange0 = (event) => {
    setResearchArea(event.target.value);
  };

  const [trl, setTrl] = useState("");

  const handleChange1 = (event) => {
    setTrl(event.target.value);
  };

  return (
    <Box sx={{ ml: 0.1, border: '2px solid green', height: '100%' }}>

      <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>

        <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Researcher / Scientist Application Form</Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Left Section - Main Form */}
        <Grid size={12} md={7.5}>
          <Paper elevation={0} sx={{

          }}>
            <Box sx={{ p: '14px 20px' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Researcher / Scientist Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>


              <Grid container spacing={2}>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Full Name" />
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Email Address" />
                </Grid>

                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Institution / University / Research Organization" />
                </Grid>
                <Grid size={3} sm={6}>
                  <TextField fullWidth placeholder="Department" />
                </Grid>

              </Grid>




              <Grid container spacing={2}>
                <Grid size={3} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="research-area-label">
                      Research Area
                    </InputLabel>

                    <Select
                      labelId="research-area-label"
                      id="research-area"
                      value={researchArea}
                      label="Research Area"
                      onChange={handleChange0}
                    >
                      <MenuItem value="" disabled>
                        Research Area
                      </MenuItem>
                      <MenuItem value="biotech">Biotechnology</MenuItem>
                      <MenuItem value="nanotech">Nanotechnology</MenuItem>
                      <MenuItem value="ai">Artificial Intelligence</MenuItem>
                      <MenuItem value="renewable">Renewable Energy</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={3} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="trl-label">
                      Technology Readiness Level (TRL)
                    </InputLabel>

                    <Select
                      labelId="trl-label"
                      id="trl"
                      value={trl}
                      label="Technology Readiness Level (TRL)"
                      onChange={handleChange1}
                    >
                      <MenuItem value="" disabled>
                        Technology Readiness Level (TRL)
                      </MenuItem>

                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
                        <MenuItem key={val} value={val}>
                          TRL {val}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems="center">
                <Grid size={12} sm={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend" sx={{ fontSize: '0.9rem', color: '#444', mb: 0.5 }}>Patent Filed?</FormLabel>
                    <RadioGroup row defaultValue="no">
                      <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid size={12} sm={6}>
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
        <Grid size={12} md={4.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0} sx={{
             
            }}>
              <Box sx={{ p: '14px 20px'}}>
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

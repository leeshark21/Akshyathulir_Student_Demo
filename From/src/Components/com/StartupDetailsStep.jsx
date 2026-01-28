
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const StartupDetailsStep = () => {
  const [stage, setStage] = useState("");

  const handleChange1 = (event) => {
    setStage(event.target.value);
  };

  const [teamSize, setTeamSize] = useState("");

  const handleChange2 = (event) => {
    setTeamSize(event.target.value);
  };
  const [fundingStatus, setFundingStatus] = useState("");

  const handleChange3 = (event) => {
    setFundingStatus(event.target.value);
  };
  const [revenueModel, setRevenueModel] = useState("");

  const handleChange4 = (event) => {
    setRevenueModel(event.target.value);
  };

  const [targetMarket, setTargetMarket] = useState("");

  const handleChange5 = (event) => {
    setTargetMarket(event.target.value);
  };
  return (
    <Box sx={{ border: '2px solid green', height: '100%' }}>
      <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>
        <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
          Startup Founder Application Form
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ p: 3 }}>
        {/* Left Section - Main Form */}
        <Grid size={12} md={7}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Grid size={3} sm={6}>
              <TextField fullWidth placeholder="Startup Name" />
            </Grid>
            <Grid size={3} sm={6}>
              <TextField fullWidth placeholder="Founder / Co-Founder Name" />
            </Grid>

            <Grid size={3} sm={6}>
              <TextField fullWidth placeholder="Email Address" />
            </Grid>
            <Grid size={3} sm={6}>
              <TextField fullWidth placeholder="Mobile Number" />
            </Grid>

            <Grid size={3} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="startup-stage-label">
                  Industry Domain
                </InputLabel>

                <Select
                  labelId="startup-stage-label"
                  id="startup-stage"
                  value={stage}
                  label="Stage of Startup"
                  onChange={handleChange1}
                >
                  <MenuItem value="" disabled>
                    Industry Domain
                  </MenuItem>
                  <MenuItem value="it">Information Technology</MenuItem>
                  <MenuItem value="healthcare">Healthcare</MenuItem>
                  <MenuItem value="fintech">Fintech</MenuItem>
                  <MenuItem value="agritech">Agritech</MenuItem>
                  <MenuItem value="edutech">Edutech</MenuItem>
                </Select>
              </FormControl>

            </Grid>

            
              <Grid size={3} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="startup-stage-label">
                    Stage of Startup
                  </InputLabel>

                  <Select
                    labelId="startup-stage-label"
                    id="startup-stage"
                    value={stage}
                    label="Stage of Startup"
                    onChange={handleChange2}
                  >
                    <MenuItem value="" disabled>
                      Stage of Startup
                    </MenuItem>
                    <MenuItem value="idea">Idea Stage</MenuItem>
                    <MenuItem value="mvp">MVP Stage</MenuItem>
                    <MenuItem value="early">Early Revenue</MenuItem>
                    <MenuItem value="scaling">Scaling</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={3} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="team-size-label">
                    Team Size
                  </InputLabel>

                  <Select
                    labelId="team-size-label"
                    id="team-size"
                    value={teamSize}
                    label="Team Size"
                    onChange={handleChange2}
                  >
                    <MenuItem value="" disabled>
                      Team Size
                    </MenuItem>
                    <MenuItem value="1-2">1–2 Members</MenuItem>
                    <MenuItem value="3-5">3–5 Members</MenuItem>
                    <MenuItem value="6-10">6–10 Members</MenuItem>
                    <MenuItem value="10+">10+ Members</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            

            
              <Grid size={3} >
                <TextField fullWidth placeholder="Year Founded" />
              </Grid>
              <Grid size={3} >
                <FormControl fullWidth>
                  <InputLabel id="funding-status-label">
                    Funding Status
                  </InputLabel>

                  <Select
                    labelId="funding-status-label"
                    id="funding-status"
                    value={fundingStatus}
                    label="Funding Status"
                    onChange={handleChange3}
                  >
                    <MenuItem value="" disabled>
                      Funding Status
                    </MenuItem>
                    <MenuItem value="bootstrapped">Bootstrapped</MenuItem>
                    <MenuItem value="angel">Angel Funded</MenuItem>
                    <MenuItem value="vc">VC Funded</MenuItem>
                    <MenuItem value="grant">Government Grant</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
           

            
              <Grid size={3} >
                <FormControl fullWidth>
                  <InputLabel id="revenue-model-label">
                    Revenue Model
                  </InputLabel>

                  <Select
                    labelId="revenue-model-label"
                    id="revenue-model"
                    value={revenueModel}
                    label="Revenue Model"
                    onChange={handleChange4}
                  >
                    <MenuItem value="" disabled>
                      Revenue Model
                    </MenuItem>
                    <MenuItem value="b2b">B2B</MenuItem>
                    <MenuItem value="b2c">B2C</MenuItem>
                    <MenuItem value="saas">SaaS</MenuItem>
                    <MenuItem value="marketplace">Marketplace</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={3} >
                <FormControl fullWidth>
                  <InputLabel id="target-market-label">
                    Target Market
                  </InputLabel>

                  <Select
                    labelId="target-market-label"
                    id="target-market"
                    value={targetMarket}
                    label="Target Market"
                    onChange={handleChange5}
                  >
                    <MenuItem value="" disabled>
                      Target Market
                    </MenuItem>
                    <MenuItem value="local">Local</MenuItem>
                    <MenuItem value="national">National</MenuItem>
                    <MenuItem value="global">Global</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            

            <Grid size={12}>
              <TextField fullWidth placeholder="Website / Product Demo Link" />
            </Grid>

            <Box sx={{ mt: 1 }}>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                sx={{
                  textTransform: 'none',
                  borderRadius: '10px',
                  borderColor: '#CADBCE',
                  color: '#4B7A54',
                  bgcolor: '#F0F7F1',
                  px: 3,
                  py: 1.2,
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: '#E8F5E9'
                  }
                }}
              >
                Upload Pitch Deck (PDF/PPT)
                <input type="file" hidden />
              </Button>
              <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#888', ml: 1 }}>
                Max file size: 10MB
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper elevation={0}>
              <Box sx={{ p: '14px 20px' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Support Needed</Typography>
              </Box>
              <Box sx={{ p: 2.5, bgcolor: '#F9F9F9' }}>
                <SupportOption label="Mentorship & Guidance" />
                <SupportOption label="Funding Assistance" />
                <SupportOption label="Investor Connect" />
                <SupportOption label="Technical Support" />
                <SupportOption label="Legal & Compliance" />
                <SupportOption label="Marketing & Sales Support" />
                <SupportOption label="Workspace / Infrastructure" />
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupDetailsStep;
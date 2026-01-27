import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Select, 
  MenuItem, 
  FormControl,
  Paper,
  Button
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const StartupDetailsStep = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 2 of 4: Startup Founder Application Form
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section - Main Form */}
        <Grid item xs={12} md={7.5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField fullWidth placeholder="Startup Name" />
            <TextField fullWidth placeholder="Founder / Co-Founder Name" />
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder="Email Address" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder="Mobile Number" />
              </Grid>
            </Grid>

            <TextField
              select
              fullWidth
              defaultValue=""
              displayEmpty
            >
              <MenuItem value="" disabled>Industry Domain</MenuItem>
              <MenuItem value="it">Information Technology</MenuItem>
              <MenuItem value="healthcare">Healthcare</MenuItem>
              <MenuItem value="fintech">Fintech</MenuItem>
              <MenuItem value="agritech">Agritech</MenuItem>
              <MenuItem value="edutech">Edutech</MenuItem>
            </TextField>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="" disabled>Stage of Startup</MenuItem>
                  <MenuItem value="idea">Idea Stage</MenuItem>
                  <MenuItem value="mvp">MVP Stage</MenuItem>
                  <MenuItem value="early">Early Revenue</MenuItem>
                  <MenuItem value="scaling">Scaling</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="" disabled>Team Size</MenuItem>
                  <MenuItem value="1-2">1-2 Members</MenuItem>
                  <MenuItem value="3-5">3-5 Members</MenuItem>
                  <MenuItem value="6-10">6-10 Members</MenuItem>
                  <MenuItem value="10+">10+ Members</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth placeholder="Year Founded" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  displayEmpty
                >
                  <MenuItem value="" disabled>Funding Status</MenuItem>
                  <MenuItem value="bootstrapped">Bootstrapped</MenuItem>
                  <MenuItem value="angel">Angel Funded</MenuItem>
                  <MenuItem value="vc">VC Funded</MenuItem>
                  <MenuItem value="grant">Government Grant</MenuItem>
                </TextField>
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
                  <MenuItem value="" disabled>Revenue Model</MenuItem>
                  <MenuItem value="b2b">B2B</MenuItem>
                  <MenuItem value="b2c">B2C</MenuItem>
                  <MenuItem value="saas">SaaS</MenuItem>
                  <MenuItem value="marketplace">Marketplace</MenuItem>
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
                  <MenuItem value="" disabled>Target Market</MenuItem>
                  <MenuItem value="local">Local</MenuItem>
                  <MenuItem value="national">National</MenuItem>
                  <MenuItem value="global">Global</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <TextField fullWidth placeholder="Website / Product Demo Link" />

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

            {/* Faculty Mentor - Optional placeholder if needed but prompt says simple Startup form */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartupDetailsStep;

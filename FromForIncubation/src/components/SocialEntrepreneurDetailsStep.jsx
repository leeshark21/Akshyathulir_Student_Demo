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
  FormLabel,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';

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

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 2 of 4: Social Entrepreneur Application Form
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
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Social Entrepreneur Details</Typography>
            </Box>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <TextField fullWidth placeholder="Initiative / Organization Name" />
              <TextField fullWidth placeholder="Founder Name" />
              
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
                    <MenuItem value="" disabled>Problem Domain</MenuItem>
                    <MenuItem value="health">Health</MenuItem>
                    <MenuItem value="education">Education</MenuItem>
                    <MenuItem value="environment">Environment</MenuItem>
                    <MenuItem value="agriculture">Agriculture</MenuItem>
                    <MenuItem value="women">Women Empowerment</MenuItem>
                    <MenuItem value="rural">Rural Development</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12}>
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
                <SupportOption label="Funding / Grants" />
                <SupportOption label="Mentorship & Guidance" />
                <SupportOption label="Government Scheme Support" />
                <SupportOption label="Field Implementation Support" />
                <SupportOption label="Legal & Compliance" />
                <SupportOption label="Marketing & Awareness" />
              </Box>
            </Paper>

            <Box sx={{ 
              p: 2.5, 
              border: '1px dashed #CADBCE', 
              borderRadius: '12px',
              bgcolor: '#F0F7F1'
            }}>
              <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mb: 1 }}>
                Social Enterprise Note
              </Typography>
              <Typography variant="caption" sx={{ color: '#555' }}>
                Priority is given to initiatives aligned with Sustainable Development Goals (SDGs).
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SocialEntrepreneurDetailsStep;

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
  InputLabel,
  Paper,
  alpha
} from '@mui/material';

const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const StudentDetailsStep = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 2 of 4: Student / Innovator Application Form
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={7}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField fullWidth placeholder="Full Name" />
            <TextField fullWidth placeholder="Email" />
            <TextField fullWidth placeholder="Mobile Number" />
            <TextField fullWidth placeholder="College / University" />
            <TextField fullWidth placeholder="Course & Year" />

            {/* Idea Title Section */}
            <Box sx={{ 
              mt: 1, 
              p: 2.5, 
              border: '1px solid #EEE', 
              borderRadius: '12px',
              bgcolor: '#FDFDFD' 
            }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#444' }}>
                Idea Title
              </Typography>
              <TextField 
                fullWidth 
                placeholder="Describe the problem you are solving" 
                multiline 
                rows={2} 
                sx={{ mb: 2, bgcolor: 'white' }}
              />
              <TextField 
                fullWidth 
                placeholder="Explain your innovative solution" 
                multiline 
                rows={2} 
                sx={{ bgcolor: 'white' }}
              />
            </Box>

            <TextField 
              fullWidth 
              placeholder="Technology Used" 
              sx={{ mt: 1 }}
            />
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* Support Needed Section */}
            <Paper elevation={0} sx={{ 
              border: '1px solid #EEE', 
              borderRadius: '12px', 
              overflow: 'hidden' 
            }}>
              <Box sx={{ bgcolor: 'primary.main', p: '12px 20px', color: 'white' }}>
                <Typography sx={{ fontWeight: 600 }}>Support Needed</Typography>
              </Box>
              <Box sx={{ p: 2.5, bgcolor: '#F9F9F9' }}>
                <SupportOption label="Mentorship" />
                <SupportOption label="Prototype Development" />
                <SupportOption label="Funding / Grant" />
                <SupportOption label="Lab Access" />
                <SupportOption label="Marketing Support" />
              </Box>
            </Paper>

            {/* Team Size */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#444' }}>
                Team Size
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                defaultValue=""
              >
                <MenuItem value="" disabled>Select Team Size</MenuItem>
                <MenuItem value="1">Solo Founder</MenuItem>
                <MenuItem value="2-4">Small Team (2-4)</MenuItem>
                <MenuItem value="5+">Large Team (5+)</MenuItem>
              </TextField>
            </Box>

            {/* Faculty Mentor */}
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#444' }}>
                Faculty Mentor (if any)
              </Typography>
              <TextField 
                fullWidth 
                size="small"
                placeholder="Name of Mentor" 
              />
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentDetailsStep;

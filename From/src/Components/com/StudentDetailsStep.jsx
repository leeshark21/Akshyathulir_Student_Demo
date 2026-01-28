
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import MenuItem from '@mui/material/MenuItem';

import Paper from '@mui/material/Paper';
const SupportOption = ({ label }) => (
  <FormControlLabel
    control={<Checkbox sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
    label={<Typography sx={{ fontSize: '0.95rem', color: '#555' }}>{label}</Typography>}
    sx={{ mb: 0.5, display: 'flex' }}
  />
);

const StudentDetailsStep = () => {
  return (
    <>
    <Box sx={{ border: '2px solid green', height: '100%', }}>
       <Box sx={{ bgcolor: 'green', color: 'white', p: 1 }}>
                    <Typography variant="h5" >Select Applicant Type</Typography>
        </Box>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid size={12} >
          <Box sx={{p:3}} >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2,px:2 }}>
            <TextField sx={{width:'500'}} placeholder="Full Name" />
            <TextField sx={{width:'500'}} placeholder="Email" />
            <TextField sx={{width:'500'}}  placeholder="Mobile Number" />
            <TextField sx={{width:'500'}}  placeholder="College / University" />
            <TextField sx={{width:'500'}}  placeholder="Course & Year" />
            </Box>
            

            {/* Idea Title Section */}
            <Box sx={{ 
              mt: 1, 
              p: 2.5, 
              
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
               <TextField 
              fullWidth 
              placeholder="Technology Used" 
              sx={{ mt: 1 }}
            />
            </Box>

           
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid size={12} md={5}>
          <Box sx={{ px:7 ,pb:2,display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* Support Needed Section */}
            <Paper elevation={0} sx={{ 
              
            }}>
              <Box sx={{  }}>
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
    
    </>
    
  );
};

export default StudentDetailsStep;

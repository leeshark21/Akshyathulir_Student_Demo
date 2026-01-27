import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Paper,
  Divider
} from '@mui/material';

const SupportCategory = ({ title, options }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 1, fontSize: '0.95rem' }}>
      {title}
    </Typography>
    <Grid container spacing={0}>
      {options.map((option) => (
        <Grid item xs={12} sm={6} key={option}>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ '&.Mui-checked': { color: 'primary.main' } }} />}
            label={<Typography sx={{ fontSize: '0.875rem', color: '#555' }}>{option}</Typography>}
            sx={{ mb: 0.5, width: '100%' }}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const SupportNeededStep = () => {
  const supportDataLeft = [
    {
      title: "Infrastructure & Facilities",
      options: ["Co-working Space", "Dedicated Office Space", "Lab / Workshop Access", "Equipment & Tools"]
    },
    {
      title: "Business & Startup Support",
      options: ["Mentorship & Advisory", "Business Model Validation", "Market Access & Sales Support", "Customer Discovery"]
    },
    {
      title: "Funding & Financial Support",
      options: ["Seed Funding", "Grants / Subsidies", "Investor Connect", "Loan / Credit Assistance"]
    }
  ];

  const supportDataRight = [
    {
      title: "Technology & Innovation",
      options: ["Product Development Support", "Technology Commercialization", "Prototype Development", "Testing & Validation"]
    },
    {
      title: "Legal & Compliance",
      options: ["Company Registration", "IP / Patent Filing", "Legal Advisory", "Regulatory Compliance"]
    },
    {
      title: "Government & Ecosystem",
      options: ["Government Scheme Guidance", "Industry Partnerships", "Academic Collaboration", "CSR / NGO Connect"]
    }
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 3 of 4: Type of Support Required
      </Typography>

      <Grid container spacing={3}>
        {/* Left Card - Core Support */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ 
            border: '1px solid #EEE', 
            borderRadius: '12px', 
            overflow: 'hidden',
            bgcolor: 'white',
            height: '100%'
          }}>
            <Box sx={{ bgcolor: 'primary.main', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Type of Support Required</Typography>
            </Box>
            <Box sx={{ p: 3 }}>
              {supportDataLeft.map((cat, idx) => (
                <React.Fragment key={cat.title}>
                  <SupportCategory title={cat.title} options={cat.options} />
                  {idx < supportDataLeft.length - 1 && <Divider sx={{ my: 2, borderStyle: 'dashed' }} />}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Card - Specialized Support */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ 
            border: '1px solid #EEE', 
            borderRadius: '12px', 
            overflow: 'hidden',
            bgcolor: 'white',
            height: '100%'
          }}>
            <Box sx={{ bgcolor: 'primary.main', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Specialized & Institutional Support</Typography>
            </Box>
            <Box sx={{ p: 3 }}>
              {supportDataRight.map((cat, idx) => (
                <React.Fragment key={cat.title}>
                  <SupportCategory title={cat.title} options={cat.options} />
                  {idx < supportDataRight.length - 1 && <Divider sx={{ my: 2, borderStyle: 'dashed' }} />}
                </React.Fragment>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Additional Requirements */}
        <Grid item xs={12}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#444' }}>
              Additional Requirements Section
            </Typography>
            <TextField 
              fullWidth 
              placeholder="Briefly describe your specific support expectations" 
              multiline 
              rows={4} 
              variant="outlined" 
              sx={{ 
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  backgroundColor: '#FDFDFD'
                }
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SupportNeededStep;

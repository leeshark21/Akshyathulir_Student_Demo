import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  useTheme,
  alpha 
} from '@mui/material';
import School from '@mui/icons-material/School';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import Science from '@mui/icons-material/Science';
import People from '@mui/icons-material/People';
import Business from '@mui/icons-material/Business';
import Park from '@mui/icons-material/Park'; 

const applicantTypes = [
  {
    id: 'student',
    title: 'Student / Innovator',
    icon: <School />,
  },
  {
    id: 'startup',
    title: 'Startup Founder',
    icon: <RocketLaunch />,
  },
  {
    id: 'researcher',
    title: 'Researcher / Scientist',
    icon: <Science />,
  },
  {
    id: 'social',
    title: 'Social Entrepreneur',
    icon: <People />,
  },
  {
    id: 'social2', 
    title: 'Social Entrepreneur',
    icon: <Park />, 
  },
  {
    id: 'msme',
    title: 'MSME / Small Business',
    icon: <Business />,
  },
];

const ApplicantTypeStep = ({ selectedType, onSelect }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Please select your type of applicant:
      </Typography>

      <Grid container spacing={2}>
        {applicantTypes.map((item) => {
          const isSelected = selectedType === item.id;
          return (
            <Grid item xs={12} sm={6} key={item.id}>
              <Card
                onClick={() => onSelect(item.id)}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  p: '12px 20px',
                  bgcolor: isSelected ? '#F0F7F1' : 'white',
                  border: `1.5px solid ${isSelected ? theme.palette.primary.main : '#EEEEEE'}`,
                  boxShadow: isSelected ? '0px 4px 12px rgba(30, 74, 40, 0.1)' : 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    bgcolor: '#F9FCF9'
                  },
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  bgcolor: '#E8F1E9', 
                  borderRadius: '50%', 
                  width: 44, 
                  height: 44,
                  mr: 2,
                  color: 'primary.main'
                }}>
                  {React.cloneElement(item.icon, { sx: { fontSize: 24 } })}
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500, color: '#333', fontSize: '1.05rem' }}>
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ApplicantTypeStep;

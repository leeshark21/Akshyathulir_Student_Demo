import React, { useState } from 'react';
import { 
  ThemeProvider, 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Button, 
  Paper,
  IconButton,
  Divider,
  alpha
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import theme from './theme';
import ApplicantTypeStep from './components/ApplicantTypeStep';
import StudentDetailsStep from './components/StudentDetailsStep';
import StartupDetailsStep from './components/StartupDetailsStep';
import ResearcherDetailsStep from './components/ResearcherDetailsStep';
import SocialEntrepreneurDetailsStep from './components/SocialEntrepreneurDetailsStep';
import MSMEDetailsStep from './components/MSMEDetailsStep';
import SupportNeededStep from './components/SupportNeededStep';
import FacilitiesAmenitiesStep from './components/FacilitiesAmenitiesStep';
import ReviewSubmitStep from './components/ReviewSubmitStep';

const steps = [
  'Step 1: Applicant Type', 
  'Step 2: Applicant Details', 
  'Step 3: Support Needed', 
  'Step 4: Facilities & Amenities',
  'Step 5: Review & Submit'
];

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: '#EAEAEA', // Slightly darker background to make the white container pop
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        p: 2
      }}>
        <Paper 
          elevation={0} 
          sx={{ 
            width: '100%', 
            maxWidth: 1000, 
            borderRadius: '24px', 
            overflow: 'hidden',
            boxShadow: '0px 10px 40px rgba(0,0,0,0.1)'
          }}
        >
          {/* Header */}
          <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'white', 
            p: '24px 32px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Incubation Application Form
            </Typography>
            <IconButton sx={{ color: 'white' }}>
              <MoreHorizIcon />
            </IconButton>
          </Box>

          <Box sx={{ p: '32px 40px' }}>
            {/* Custom Stepper */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              bgcolor: '#F3F3F3', 
              borderRadius: '12px', 
              p: 1, 
              mb: 4,
              overflowX: 'auto'
            }}>
              {steps.map((label, index) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{
                    p: '8px 24px',
                    borderRadius: '10px 50px 50px 10px', // Teardrop/Pill shape for active
                    bgcolor: activeStep === index ? 'primary.main' : 'transparent',
                    color: activeStep === index ? 'white' : '#777',
                    fontWeight: activeStep === index ? 600 : 400,
                    fontSize: '0.9rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease'
                  }}>
                    {label}
                  </Box>
                  {index < steps.length - 1 && (
                    <ChevronRightIcon sx={{ mx: 1, color: '#CCC', fontSize: '1.2rem' }} />
                  )}
                </Box>
              ))}
            </Box>

            {/* Step Content */}
            <Box sx={{ minHeight: 450 }}>
              {activeStep === 0 && (
                <ApplicantTypeStep 
                  selectedType={selectedType} 
                  onSelect={setSelectedType} 
                />
              )}
              {activeStep === 1 && (
                <>
                  {selectedType === 'startup' ? (
                    <StartupDetailsStep />
                  ) : selectedType === 'researcher' ? (
                    <ResearcherDetailsStep />
                  ) : selectedType === 'social' || selectedType === 'social2' ? (
                    <SocialEntrepreneurDetailsStep />
                  ) : selectedType === 'msme' ? (
                    <MSMEDetailsStep />
                  ) : (
                    <StudentDetailsStep />
                  )}
                </>
              )}
              {activeStep === 2 && (
                <SupportNeededStep />
              )}
              {activeStep === 3 && (
                <FacilitiesAmenitiesStep />
              )}
              {activeStep === 4 && (
                <ReviewSubmitStep 
                  onBack={handleBack}
                  onSubmit={() => setActiveStep(5)} 
                />
              )}
              {activeStep > 4 && (
                <Box sx={{ py: 10, textAlign: 'center' }}>
                  <Typography variant="h6" color="text.secondary">
                    Application Submitted Successfully!
                  </Typography>
                </Box>
              )}
            </Box>

            {/* Footer - Hide on Review Step (Index 4) as it has its own buttons, and Success Step (Index 5) */}
            {activeStep < 4 && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              mt: 6 
            }}>
              <Button 
                startIcon={<ChevronLeftIcon />}
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{ 
                  color: '#666', 
                  bgcolor: '#F5F5F5',
                  borderRadius: '8px',
                  px: 3,
                  '&:hover': { bgcolor: '#EEEEEE' },
                  '&.Mui-disabled': { bgcolor: 'transparent', opacity: 0.5 }
                }}
              >
                Back
              </Button>
              
              <Box sx={{ 
                display: 'flex', 
                borderRadius: '10px', 
                overflow: 'hidden',
                boxShadow: '0px 4px 10px rgba(30, 74, 40, 0.15)'
              }}>
                <Button 
                  onClick={() => {}}
                  sx={{ 
                    bgcolor: '#4B7A54', // Slightly lighter variation for Draft
                    color: 'white', 
                    borderRadius: 0,
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    px: 3,
                    '&:hover': { bgcolor: '#3A5F41' }
                  }}
                >
                  Save as Draft
                </Button>
                <Button 
                  endIcon={<ChevronRightIcon />}
                  onClick={handleNext}
                  disabled={activeStep > steps.length - 1 || (activeStep === 0 && !selectedType)}
                  sx={{ 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    borderRadius: 0,
                    px: 3,
                    '&:hover': { bgcolor: '#15331D' },
                    '&.Mui-disabled': { bgcolor: '#A5B5A9', color: 'rgba(255,255,255,0.5)' }
                  }}
                >
                   Next
                </Button>
              </Box>
            </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;

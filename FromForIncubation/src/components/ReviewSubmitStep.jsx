import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Divider, 
  Button, 
  Chip, 
  Checkbox, 
  FormControlLabel, 
  IconButton,
  Paper,
  useTheme,
  alpha 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Mock Data (Simulating values from Context/State)
const mockData = {
  applicant: {
    type: "Student / Innovator",
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    institution: "Indian Institute of Technology, Madras"
  },
  idea: {
    title: "EcoSmart Waste Management System",
    sector: "CleanTech / Smart City",
    stage: "Prototype Ready",
    description: "An AI-powered waste segregation and monitoring system for smart cities that automates sorting at source and tracks waste generation patterns.",
  },
  support: [
    "Mentorship & Guidance", 
    "Prototyping Lab Access", 
    "Seed Funding Support", 
    "Legal & IP Consultation"
  ],
  facilities: [
    "Air Conditioned Workspace (Seat)", 
    "High-Speed Wi-Fi", 
    "Meeting Room Access", 
    "Two-Wheeler Parking"
  ]
};

const SectionHeader = ({ title, onEdit }) => (
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    mb: 2,
    pb: 1,
    borderBottom: '1px solid #EEE' 
  }}>
    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1E4A28' }}>
      {title}
    </Typography>
    <IconButton size="small" onClick={onEdit} sx={{ color: '#777' }}>
      <EditIcon fontSize="small" />
    </IconButton>
  </Box>
);

const InfoRow = ({ label, value }) => (
  <Box sx={{ display: 'flex', mb: 1.5 }}>
    <Typography sx={{ width: 140, fontSize: '0.9rem', color: '#666', fontWeight: 500 }}>
      {label}:
    </Typography>
    <Typography sx={{ flex: 1, fontSize: '0.95rem', color: '#333', fontWeight: 500 }}>
      {value}
    </Typography>
  </Box>
);

const ReviewSubmitStep = ({ onBack, onSubmit }) => {
  const theme = useTheme();
  const [declared, setDeclared] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Define onBack and onSubmit default handlers if not provided props (for fallback)
  const handleBack = onBack || (() => console.log("Back clicked"));
  
  const handleSubmit = () => {
    setSubmitted(true);
    if (onSubmit) onSubmit();
  };

  const handleEdit = (section) => {
    console.log(`Edit ${section} clicked`);
    // Logic to navigate back to specific step would go here
  };

  if (submitted) {
    return (
        <Box sx={{ py: 8, textAlign: 'center' }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Application Submitted Successfully!
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Your reference ID is <strong>INC-2024-8592</strong>. We have sent a confirmation email to your registered address.
            </Typography>
        </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#333', mb: 3, fontWeight: 500 }}>
        Step 5 of 5: Review & Submit
      </Typography>

      <Grid container spacing={3}>
        {/* Section A: Applicant Information */}
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ border: '1px solid #EEE', borderRadius: '12px', height: '100%' }}>
            <CardContent>
              <SectionHeader title="Applicant Information" onEdit={() => handleEdit('applicant')} />
              
              <InfoRow label="Applicant Type" value={mockData.applicant.type} />
              <InfoRow label="Full Name" value={mockData.applicant.name} />
              <InfoRow label="Email Address" value={mockData.applicant.email} />
              <InfoRow label="Mobile Number" value={mockData.applicant.phone} />
              <InfoRow label="Institution" value={mockData.applicant.institution} />
            </CardContent>
          </Card>
        </Grid>

        {/* Section B: Organization / Idea Details */}
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ border: '1px solid #EEE', borderRadius: '12px', height: '100%' }}>
            <CardContent>
              <SectionHeader title="Organization / Idea Details" onEdit={() => handleEdit('idea')} />

              <InfoRow label="Title / Name" value={mockData.idea.title} />
              <InfoRow label="Domain" value={mockData.idea.sector} />
              <InfoRow label="Current Stage" value={mockData.idea.stage} />
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" sx={{ color: '#666', fontWeight: 600, mb: 0.5, display: 'block' }}>
                  Brief Description
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6 }}>
                  {mockData.idea.description}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Section C: Support & Amenities */}
        <Grid item xs={12}>
          <Card elevation={0} sx={{ border: '1px solid #EEE', borderRadius: '12px' }}>
            <CardContent>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <SectionHeader title="Support Requested" onEdit={() => handleEdit('support')} />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {mockData.support.map((item, index) => (
                      <Chip 
                        key={index} 
                        label={item} 
                        sx={{ 
                          bgcolor: alpha(theme.palette.primary.main, 0.08), 
                          color: 'primary.main',
                          fontWeight: 500,
                          fontSize: '0.85rem'
                        }} 
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <SectionHeader title="Facilities & Amenities" onEdit={() => handleEdit('facilities')} />
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    {mockData.facilities.map((item, index) => (
                      <Box component="li" key={index} sx={{ mb: 1, color: '#444', fontSize: '0.95rem' }}>
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* 4. Declaration Section */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, bgcolor: '#F8F9FA', border: '1px dashed #CCC', borderRadius: '12px' }}>
            <FormControlLabel
              control={
                <Checkbox 
                  checked={declared} 
                  onChange={(e) => setDeclared(e.target.checked)} 
                  sx={{ '&.Mui-checked': { color: 'primary.main' } }}
                />
              }
              label={
                <Typography sx={{ fontWeight: 500, color: '#333' }}>
                  I hereby declare that all information provided in this application is true and correct to the best of my knowledge.
                  I understand that any misrepresentation may lead to rejection of the application.
                </Typography>
              }
            />
          </Paper>
        </Grid>

        {/* 5. Action Buttons */}
        <Grid item xs={12}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mt: 2,
            pt: 3,
            borderTop: '1px solid #EEE'
          }}>
            <Button 
              variant="outlined" 
              startIcon={<KeyboardBackspaceIcon />}
              onClick={handleBack}
              sx={{ 
                color: '#666', 
                borderColor: '#DDD', 
                px: 3,
                '&:hover': { borderColor: '#BBB', bgcolor: '#F5F5F5' }
              }}
            >
              Back
            </Button>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="outlined" 
                startIcon={<SaveIcon />}
                onClick={() => console.log('Saved draft')}
                sx={{ 
                  color: 'primary.main', 
                  borderColor: 'primary.main',
                  px: 3,
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.05) }
                }}
              >
                Save as Draft
              </Button>
              <Button 
                variant="contained" 
                endIcon={<SendIcon />}
                disabled={!declared}
                onClick={handleSubmit}
                sx={{ 
                    bgcolor: 'primary.main', 
                    px: 4,
                    py: 1,
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: '0 4px 12px rgba(30, 74, 40, 0.25)',
                    '&:hover': { bgcolor: '#15331D' },
                    '&.Mui-disabled': { bgcolor: '#A5B5A9', color: 'rgba(255,255,255,0.7)' }
                }}
              >
                Submit Application
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewSubmitStep;

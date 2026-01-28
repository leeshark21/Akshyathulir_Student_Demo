import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import PowerIcon from '@mui/icons-material/Power';
import ChairIcon from '@mui/icons-material/Chair';
import WifiIcon from '@mui/icons-material/Wifi';
import LanIcon from '@mui/icons-material/Lan';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';
import PrintIcon from '@mui/icons-material/Print';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SchoolIcon from '@mui/icons-material/School';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CampaignIcon from '@mui/icons-material/Campaign';

const FacilityItem = ({ icon, label, checked, onChange }) => {
  const theme = useTheme();
  
  return (
    <Box 
      onClick={onChange}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        p: 2, 
        borderRadius: '12px',
        border: `1.5px solid ${checked ? theme.palette.primary.main : '#EEEEEE'}`,
        bgcolor: checked ? '#F0F7F1' : 'white',
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          bgcolor: '#F9FCF9'
        }
      }}
    >
      <Box sx={{ 
        mr: 2, 
        color: checked ? 'primary.main' : '#777',
        display: 'flex',
        alignItems: 'center'
      }}>
        {React.cloneElement(icon, { fontSize: 'medium' })}
      </Box>
      <Typography sx={{ 
        flexGrow: 1, 
        fontWeight: 500, 
        color: checked ? 'primary.main' : '#333',
        fontSize: '0.95rem'
      }}>
        {label}
      </Typography>
      <Checkbox 
        checked={checked} 
        onChange={onChange}
        sx={{ 
          p: 0,
          color: '#DDD',
          '&.Mui-checked': { color: 'primary.main' }
        }} 
      />
    </Box>
  );
};

const SectionHeader = ({ title }) => (
  <Typography variant="h6" sx={{ 
    mb: 2, 
    fontWeight: 600, 
    color: '#1E4A28', 
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    '&::before': {
      content: '""',
      display: 'block',
      width: 4,
      height: 24,
      bgcolor: '#1E4A28',
      mr: 1.5,
      borderRadius: 4
    }
  }}>
    {title}
  </Typography>
);

const FacilitiesAmenitiesStep = () => {
  const [facilities, setFacilities] = useState({
    ac: false,
    power: true,
    seating: true,
    wifi: true,
    lan: false,
    twoWheeler: false,
    fourWheeler: false,
    meetingRoom: false,
    seminarHall: false,
    printing: false,
    pantry: false,
    mentorship: true,
    legal: false,
    demoDay: true,
    govSchemes: false
  });

  const toggleFacility = (key) => {
    setFacilities(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box>
     

      <Grid container marginTop={3} spacing={3}>
        {/* Main Card — Infrastructure & Facilities */}
        <Grid sx={{border:'2px solid green'}} size={12}>
           <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Type of Support Required</Typography>
            </Box>
          <Card sx={{ p:2}}>
           
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: '#555', fontWeight: 600 }}>
                  Workspace & Comfort
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<AcUnitIcon />} 
                      label="Air Conditioned Workspace" 
                      checked={facilities.ac}
                      onChange={() => toggleFacility('ac')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<PowerIcon />} 
                      label="24x7 Power Backup" 
                      checked={facilities.power}
                      onChange={() => toggleFacility('power')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<ChairIcon />} 
                      label="Comfortable Seating" 
                      checked={facilities.seating}
                      onChange={() => toggleFacility('seating')}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: '#555', fontWeight: 600 }}>
                  Connectivity & Parking
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<WifiIcon />} 
                      label="High-Speed Wi-Fi" 
                      checked={facilities.wifi}
                      onChange={() => toggleFacility('wifi')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<LanIcon />} 
                      label="LAN / Ethernet" 
                      checked={facilities.lan}
                      onChange={() => toggleFacility('lan')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<TwoWheelerIcon />} 
                      label="Two-Wheeler Parking" 
                      checked={facilities.twoWheeler}
                      onChange={() => toggleFacility('twoWheeler')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<DirectionsCarIcon />} 
                      label="Four-Wheeler Parking" 
                      checked={facilities.fourWheeler}
                      onChange={() => toggleFacility('fourWheeler')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Secondary Card — Additional Services & Offers */}
        <Grid sx={{border:'2px solid green'}}   size={12}>
            <Box sx={{ bgcolor: 'green', p: '14px 20px', color: 'white' }}>
              <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>Additional Services & Support</Typography>
            </Box>
          <Card sx={{ p: 3 }}>
           

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: '#555', fontWeight: 600 }}>
                  Common Facilities
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<MeetingRoomIcon />} 
                      label="Meeting Rooms" 
                      checked={facilities.meetingRoom}
                      onChange={() => toggleFacility('meetingRoom')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<EventIcon />} 
                      label="Seminar Hall" 
                      checked={facilities.seminarHall}
                      onChange={() => toggleFacility('seminarHall')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<PrintIcon />} 
                      label="Printing & Scanning" 
                      checked={facilities.printing}
                      onChange={() => toggleFacility('printing')}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FacilityItem 
                      icon={<LocalCafeIcon />} 
                      label="Cafeteria / Pantry" 
                      checked={facilities.pantry}
                      onChange={() => toggleFacility('pantry')}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" sx={{ mb: 2, color: '#555', fontWeight: 600 }}>
                  Extra Offers for Incubatees
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<SchoolIcon />} 
                      label="Free Mentorship Sessions" 
                      checked={facilities.mentorship}
                      onChange={() => toggleFacility('mentorship')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<GavelIcon />} 
                      label="Legal Consultation Support" 
                      checked={facilities.legal}
                      onChange={() => toggleFacility('legal')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<BusinessCenterIcon />} 
                      label="Investor Demo Day Access" 
                      checked={facilities.demoDay}
                      onChange={() => toggleFacility('demoDay')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FacilityItem 
                      icon={<CampaignIcon />} 
                      label="Govt. Scheme Awareness" 
                      checked={facilities.govSchemes}
                      onChange={() => toggleFacility('govSchemes')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            
            {/* Special Requests */}
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: '#555', fontWeight: 600 }}>
                Any additional facility or special requirement?
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Please describe any specific requirements you might have..."
                sx={{ bgcolor: '#F9F9F9' }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FacilitiesAmenitiesStep;

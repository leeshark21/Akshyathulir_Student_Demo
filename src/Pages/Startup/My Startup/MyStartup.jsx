import React from 'react'

import StartupMenu from '../StartupMenu/StartupMenu'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




import Divider from '@mui/material/Divider';


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FlagIcon from "@mui/icons-material/Flag";





const MyStartup = () => {
  return (
    <>
      <Box display="" mx="" my="" sx="">

        <Box>
          <StartupMenu />
        </Box>
        <Box>
          <Box>
            <Typography variant="h5" fontWeight="bold" ml={3} mb={2}>
        My Startup
      </Typography>
          </Box>

          <Card sx={{ borderRadius: 3, boxShadow: 3,m:3,p:5}}>
            <CardContent>
              {/* Top Section */}
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "#1E4A28", width: 48, height: 48 }}>ABC</Avatar>
                <Box>
                  <Typography fontWeight={600}>ABC Tech</Typography>
                  <Typography variant="body2" color="text.secondary">
                    John Doe
                  </Typography>
                </Box>
              </Stack>

              {/* Stage + Progress */}
              <Box mt={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography color="text.secondary">Stage</Typography>
                  <Chip label="MVP" size="small" />
                  <Box sx={{ flex: 1 }}>
                    <LinearProgress sx={{ '& .MuiLinearProgress-bar': { backgroundColor: '#1E4A28' } }} variant="determinate" value={50} />
                  </Box>
                  <Typography sx={{ color: '#1E4A28' }} fontWeight={500}>50%</Typography>
                </Stack>
              </Box >

              {/* Bottom Section */}

              <Grid container spacing={10} mt={2} alignItems="center" sx={{ borderTop: '1px solid #e0e0e0' }}>
                <Grid item xs={6} sx={{ borderRight: '1px solid #e0e0e0', paddingRight: 10 }}>
                  <Typography fontWeight={500}>Team Members</Typography>
                  <Stack direction="row" spacing={1} mt={1} alignItems="center">
                    <Avatar src="https://i.pravatar.cc/40?img=1" />
                    <Typography>Jane Smith</Typography>
                  </Stack>
                </Grid>



                <Grid item size={8}>
                  <Typography fontWeight={500} sx={{ color: '#1E4A28' }} padding={1}>Mentor</Typography>
                  <Stack direction="row" spacing={1} mt={1}>
                    <Avatar src="https://i.pravatar.cc/40?img=2" />
                    <Avatar src="https://i.pravatar.cc/40?img=3" />
                    <Avatar src="https://i.pravatar.cc/40?img=4" />
                  </Stack>
                  <Typography variant="body2" sx={{ color: '#1E4A28' }}>
                    Mentor area
                  </Typography>
                </Grid>

                <Grid item size={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ color: '#1E4A28' }} fontWeight={500}>
                    Progress
                  </Typography>
                  <Button variant="outlined" size="small" sx={{ color: '#1E4A28', borderColor: '#1E4A28', width: 150, mr: 4 }}>
                    View Details
                  </Button>
                </Grid>


              </Grid>
            </CardContent>
          </Card>


          <Box sx={{ p: 3, bgcolor: "#f5f6fa", minHeight: "100vh" }}>
            <Grid container spacing={3}>

              {/* Milestones */}
              <Grid item xs={12} md={4}>
                <Card sx={{ width: 385,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: 'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#2e7d32',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },}}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1}>
                      <FlagIcon sx={{ color: '#1E4A28' }} />
                      <Typography variant="h6" sx={{ color: '#1E4A28' }}>Milestones</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <CheckCircleIcon sx={{ color: '#1E4A28' }} />
                      <Box>
                        <Typography>Prototype Completed</Typography>
                        <Typography variant="caption">2 weeks ago</Typography>
                      </Box>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1} mt={1}>
                      <CheckCircleIcon sx={{ color: '#1E4A28' }} />
                      <Box>
                        <Typography>MVP Launched</Typography>
                        <Typography variant="caption">3 days ago</Typography>
                      </Box>
                    </Box>
                    <Box mt={4}>
                      <Button sx={{borderColor:'#1E4A28', width: '100%',color:'#1E4A28'}} variant="outlined">View All</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Funding Status */}
              <Grid item xs={12} md={4}>
                <Card sx={{ width: 385,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: 'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#2e7d32',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },}}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1}>
                      <MonetizationOnIcon sx={{ color: '#1E4A28' }} />
                      <Typography variant="h6" sx={{ color: '#1E4A28' }}>Funding Status</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="h4"  fontWeight="bold">$120,000 Raised</Typography>
                    <Typography  variant="body2">$120,000 out of $300,000 Goal</Typography>
                    <Box mt={2}>
                      <LinearProgress  variant="determinate" value={40} />
                    </Box>
                    <Box  mt={7}>
                      <Button sx={{borderColor:'#1E4A28', width: '100%',color:'#1E4A28'}}  variant="outlined">View Details</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Upcoming Sessions */}
              <Grid item xs={12} md={4}>
                <Card   sx={{ width: 385,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: 'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#2e7d32',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },}}>
                  <CardContent>
                    <Box display="flex" alignItems="center" gap={1}>
                      <CalendarTodayIcon sx={{ color: '#1E4A28' }} />
                      <Typography  sx={{ color: '#1E4A28' }} variant="h6">Upcoming Sessions</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box mb={1}>
                      <Typography>Apr 25, 2024 – 10:00 AM</Typography>
                      <Typography variant="caption">Jane Smith</Typography>
                      <Chip label="Booked" color="success" size="small" sx={{ ml: 1 }} />
                    </Box>
                    <Box mb={1}>
                      <Typography>Apr 27, 2024 – 02:00 PM</Typography>
                      <Typography variant="caption">Review Pitch Deck</Typography>
                      <Chip label="Pending" color="warning" size="small" sx={{ ml: 1 }} />
                    </Box>
                    <Box  mt={4}>
                      <Button sx={{borderColor:'#1E4A28', width: '100%',color:'#1E4A28'}} variant="outlined">View Calendar</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
          </Box>

        </Box>

      </Box>
    </>
  )
}

export default MyStartup

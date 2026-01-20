
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ApartmentIcon from '@mui/icons-material/Apartment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  dateAxisFormatter,
  percentageFormatter,
  usUnemploymentRate,
} from '../Dashboard/usUnemploymentRate';
import { LineChart } from '@mui/x-charts/LineChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Groups2Icon from '@mui/icons-material/Groups2';
import PaidIcon from '@mui/icons-material/Paid';
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Dashboard from './Dashboard';

const Overview = ({ openSidebar }) => {
  const xAxis = [
    {
      dataKey: 'date',
      scaleType: 'time',
      valueFormatter: dateAxisFormatter,
    },
  ];

  const yAxis = [
    {
      valueFormatter: percentageFormatter,
    },
  ];

  const series = [
    {
      dataKey: 'rate',
      showMark: false,
      valueFormatter: percentageFormatter,
    },
  ];

  const overviewdata = [
    {
      name: 'Total Startups',
      count: 125,
      icon: <ApartmentIcon />,
      percentage: 95,
      status: 'Last Month'
    },
    {
      name: 'Active Program',
      count: 8,
      icon: <QueryStatsIcon />,
      percentage: 30,
      status: 'Last Month'
    },
    {
      name: 'Mentors Count',
      count: 24,
      icon: <AssignmentIndIcon />,
      percentage: 25,
      status: 'Last Month'
    },
    {
      name: 'Total Reviews',
      count: 166,
      icon: <Groups2Icon />,
      percentage: 45,
      status: 'Last Month'
    },
  ]

  const cardData = [
    {
      title: "Growth This Month",
      icon: <TrendingUpIcon sx={{fontSize: 40, color: '#2e7d32'}} />,
      value: 18,
      label: "Growth",
      subLabel: "In This Month",
    },
    {
      title: "New Application",
      icon: <RocketLaunchIcon sx={{fontSize: 40, color: '#2e7d32'}}/>,
      value: 32,
      label: "Application",
      subLabel: "In The Last Week",
    },
  ];

  return (
    <Box>
      <Dashboard openSidebar={openSidebar}/> 
       <Box sx={{ 
      p: { xs: 2, sm: 3, md: 4 },
      backgroundColor: '#f8f9fa',
      mt:-60,
      flexGrow: 1,
      ml: openSidebar ? '240px' : '0px',
      transition: 'margin 0.3s ease',
      width: '100%',
    }}>
      
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 700,
          color: '#1a1a1a',
          mb: 4,
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          letterSpacing: '-0.5px',
        }}
      >
        Overview
      </Typography>
      
      {/* Stats Cards Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
         
          <Grid size={{ xs: 12, lg: 8 }}>
            <Grid container spacing={3} sx={
              {display:'flex'}}>
              {overviewdata.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Box sx={{
                    width: '100%',
                    height: 160,
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
                    },
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, flex: 1 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: '0.8rem',
                            color: '#999',
                            textTransform: 'uppercase',
                            letterSpacing: '0.6px',
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography 
                          variant="h3" 
                          sx={{ 
                            fontWeight: 700, 
                            fontSize: '2.2rem',
                            color: '#1a1a1a',
                            lineHeight: 1.1,
                            letterSpacing: '-1px',
                          }}
                        >
                          {item.count}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        color: '#2e7d32',
                        opacity: 0.85,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '& svg': {
                          fontSize: '2.5rem',
                        },
                      }}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
                      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                        <Box sx={{ 
                          backgroundColor: '#2e7d32', 
                          px: 1.25, 
                          py: 0.4, 
                          borderRadius: '6px',
                          boxShadow: '0 2px 6px rgba(46, 125, 50, 0.15)',
                        }}>
                          <Typography 
                            sx={{ 
                              fontWeight: 700, 
                              fontSize: '0.8rem',
                              color: 'white',
                            }}
                          >
                            +{item.percentage}%
                          </Typography>
                        </Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 500,
                            color: '#999',
                            fontSize: '0.8rem',
                          }}
                        >
                          {item.status}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        color: '#ddd',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 24,
                        height: 24,
                        transition: 'all 0.2s',
                        '&:hover': {
                          color: '#999',
                          transform: 'scale(1.1)',
                        },
                      }}>
                        <MoreVertIcon sx={{ fontSize: '1.25rem' }} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Funds Raised Card */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Box sx={{
              width: '100%',
              height: '100%',
              minHeight: 340,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'white',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              padding: 3,
              border: '1px solid #f0f0f0',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(-4px)',
              },
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1.1rem' }}>Funds Raised</Typography>
                  <PaidIcon sx={{ color: '#2e7d32', fontSize: '1.5rem' }} />
                </Box>
                <MoreHorizIcon sx={{ color: '#ddd', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { color: '#999' } }} />
              </Box>
              <Box sx={{ mb: 0.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1.75rem', letterSpacing: '-0.5px' }}>
                  $3,787,681
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 500, color: '#999', fontSize: '0.85rem', mb: 2 }}>
                $3,578.30 in last month
              </Typography>
              <Box sx={{ flex: 1, minHeight: 200 }}>
                <LineChart
                  dataset={usUnemploymentRate}
                  xAxis={xAxis}
                  yAxis={yAxis}
                  series={series}
                  height={200}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  slotProps={{
                    legend: { hidden: true },
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Chart Cards Section */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: 480,
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: 3,
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              > 
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1.1rem' }}>
                    {card.title}
                  </Typography>
                  {card.icon}
                </Box>

                <Divider sx={{ borderColor: '#f0f0f0', mb: 2.5 }} />

                <Box
                  sx={{
                    width: '100%',
                    borderRadius: '10px',
                    mb: 2.5,
                    p: 2.5,
                    bgcolor: "#2e7d32",
                    boxShadow: '0 4px 12px rgba(46, 125, 50, 0.2)',
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2.5, alignItems: 'baseline' }}>
                    <Typography
                      variant="h2"
                      sx={{ 
                        color: "white", 
                        fontWeight: 700,
                        fontSize: '2.5rem',
                        lineHeight: 1,
                        letterSpacing: '-1px',
                      }}
                    >
                      {card.value}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                      <Typography
                        variant="body1"
                        sx={{ 
                          color: "white", 
                          fontWeight: 600,
                          fontSize: '0.95rem',
                        }}
                      >
                        {card.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: "rgba(255, 255, 255, 0.85)", 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                        }}
                      >
                        {card.subLabel}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ flex: 1, minHeight: 250 }}>
                  <LineChart
                    dataset={usUnemploymentRate}
                    xAxis={xAxis}
                    yAxis={yAxis}
                    series={series}
                    height={250}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>

    </Box>
   
  )
}

export default Overview




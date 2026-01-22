import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import ApartmentIcon from '@mui/icons-material/Apartment'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import QueryStatsIcon from '@mui/icons-material/QueryStats'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import Groups2Icon from '@mui/icons-material/Groups2'




import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";




// Table






import {
  ChartContainer,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsTooltip,
  ChartsGrid,
  ChartsLegend,
} from '@mui/x-charts'

import {
  BarChart,
  barClasses,
  barElementClasses,
  barLabelClasses,
} from '@mui/x-charts/BarChart'
import Dashboard from './Dashboard'


const settings = {
  xAxis: [{ data: ['Startups Submitted', 'Mentor Bookings', 'Event Registrations'] }],
  series: [
    { id: '1', data: [4, 3, 5] },
    { id: '2', data: [1, 6, 3] },
    { id: '3', data: [2, 5, 6] },
  ],
  height: 300,
  barLabel: 'value',
  margin: { left: 0 },
};


// ✅ Inline dataset for the chart
const usaUnemploymentAndGdp = [
  { date: new Date('2023-10-20'), signups: 6, applications: 4.5, sessions: 2 },
  { date: new Date('2023-10-21'), signups: 9, applications: 4.7, sessions: 4 },
  { date: new Date('2023-10-22'), signups: 11, applications: 4.6, sessions: 6 },
  { date: new Date('2023-10-23'), signups: 13, applications: 4.8, sessions: 8 },
  { date: new Date('2023-10-24'), signups: 3, applications: 4.3, sessions: 9 },
  { date: new Date('2023-10-25'), signups: 7, applications: 4.5, sessions: 10 },
  { date: new Date('2023-10-26'), signups: 7, applications: 4.5, sessions: 12 },
]

// ✅ Stats cards data
const statsData = [
  {
    name: 'Total Startups',
    count: 125,
    icon: <ApartmentIcon />,
    percentage: 95,
    status: 'Last Month',
  },
  {
    name: 'Active Program',
    count: 8,
    icon: <QueryStatsIcon />,
    percentage: 30,
    status: 'Last Month',
  },
  {
    name: 'Mentors Count',
    count: 24,
    icon: <AssignmentIndIcon />,
    percentage: 25,
    status: 'Last Month',
  },
  {
    name: 'Total Reviews',
    count: 166,
    icon: <Groups2Icon />,
    percentage: 45,
    status: 'Last Month',
  },
]

const DailyStats = ({ openSidebar }) => {
   const [range, setRange] = React.useState("today");
  const [type, setType] = React.useState("all");

  const rows = [
    { time: "09:15 AM", action: "Startup applied", user: "ABC Tech", status: "Pending" },
    { time: "10:30 AM", action: "Mentor session booked", user: "XYZ Startup", status: "Confirmed" },
    { time: "01:45 PM", action: "Event registration", user: "LMN Startup", status: "Confirmed" },
    { time: "03:20 PM", action: "Resource uploaded", user: "ABC Tech", status: "Completed" },
  ];

  const getColor = (status) => {
    if (status === "Pending") return "warning";
    if (status === "Confirmed") return "success";
    if (status === "Completed") return "info";
    return "default";
  };
  return (
    <Box>
      <Dashboard openSidebar={openSidebar}/> 
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 },backgroundColor: '#f8f9fa', flexGrow: 1, width: '100%', ml: openSidebar ? '240px' : '0px', }}>

      <Typography
        variant="h5" sx={{
          fontWeight: 700,
          color: '#1a1a1a',
          mb: 4,
          fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
          letterSpacing: '-0.5px',
        }}
      >Daily Stats</Typography>
      {/* Stats Cards */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {statsData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between',
              width: 288,
              height: 200,
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
                backgroundColor: '#1E4A28',
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
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: '#666',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '2rem',
                    color: '#1a1a1a',
                    lineHeight: 1.2,
                  }}
                >
                  {item.count}
                </Typography>
              </Box>
              <Box sx={{
                color: '#1E4A28',
                opacity: 0.9,
                '& svg': {
                  fontSize: '2rem',
                },
              }}>
                {item.icon}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <Box sx={{
                  backgroundColor: '#1E4A28',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  boxShadow: '0 2px 4px rgba(30, 74, 40, 0.2)',
                }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      color: 'white',
                    }}
                  >
                    +{item.percentage}%
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      color: '#666',
                      fontSize: '0.875rem',
                    }}
                  >
                    {item.status}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{
                color: '#999',
                cursor: 'pointer',
                '&:hover': {
                  color: '#666',
                },
              }}>
                <MoreVertIcon />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Chart Section */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid size={12} sx={{ display: { md: 'block', lg: 'none' } }} />
            <Grid size={{ xs: 12, lg: 8 }} sx={{ display: { md: 'none', lg: 'block' } }} />
            <Grid size={12} sx={{ maxWidth: { md: 600, lg: '100%' }, mx: { md: 'auto', lg: 0 } }}>
              <Box sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: 600 },
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                p: 2.5,
                borderRadius: 3,
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                },
              }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: '#1a1a1a',
                    mb: 2,
                  }}
                >
                  Daily Platform Activity (Last 7 Days)
                </Typography>

                <ChartContainer
                  height={300}
                  series={[
                    {
                      type: 'line',
                      data: usaUnemploymentAndGdp.map((d) => d.signups),
                      label: 'Signups',
                      color: '#1976d2',
                    },
                    {
                      type: 'line',
                      data: usaUnemploymentAndGdp.map((d) => d.applications),
                      label: 'Applications',
                      color: '#ff9800',
                    },
                    {
                      type: 'line',
                      data: usaUnemploymentAndGdp.map((d) => d.sessions),
                      label: 'Sessions',
                      color: '#9c27b0',
                    },
                  ]}
                  xAxis={[
                    {
                      scaleType: 'point',
                      data: usaUnemploymentAndGdp.map((d) =>
                        d.date.toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })
                      ),
                    },
                  ]}
                >
                  <ChartsGrid />
                  <LinePlot />
                  <ChartsXAxis />
                  <ChartsYAxis />
                  <ChartsTooltip />
                  <ChartsLegend />
                </ChartContainer>

                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      pt: 1,
                      color: 'blue',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    textAlign="left"
                  >
                    Signups
                  </Typography>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      pt: 1,
                      color: 'orange',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    textAlign="left"
                  >
                    Application
                  </Typography>
                  <Typography
                    variant="caption"
                    component="p"
                    sx={{
                      pt: 1,
                      color: 'purple',
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    textAlign="left"
                  >
                    Sessions
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* bar chart */}
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid size={12} sx={{ display: { md: 'block', lg: 'none' } }} />
            <Grid size={{ xs: 12, lg: 8 }} sx={{ display: { md: 'none', lg: 'block' } }} />
            <Grid size={12} sx={{ maxWidth: { md: 600, lg: '100%' }, mx: { md: 'auto', lg: 0 } }}>
              <Box sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: 600 },
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                p: 2.5,
                borderRadius: 3,
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                },
              }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    color: '#1a1a1a',
                    mb: 2,
                  }}
                >
                  User Actions Breakdown
                </Typography>

                <BarChart
                  {...settings}
                  sx={{
                    [`& .${barClasses.series}[data-series="2"] .${barElementClasses.root}`]: {
                      fill: 'url(#bar-gradient)',
                    },
                    [`& .${barClasses.seriesLabels}[data-series="2"] .${barLabelClasses.root}`]:
                    {
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <defs>
                    <linearGradient id="bar-gradient" gradientTransform="rotate(90)">
                      <stop offset="5%" stopColor="gold" />
                      <stop offset="95%" stopColor="red" />
                    </linearGradient>
                  </defs>
                </BarChart>

                <Typography
                  variant="caption"
                  component="p"
                  sx={{
                    pt: 1,
                    color: '#999',
                    fontSize: '0.75rem',
                  }}
                  textAlign="left"
                >
                  So
                </Typography>
              </Box>
            </Grid>
          </Grid>

        </Box>

      </Box>
      <Box>
        <Box sx={
          {
            mt: 1
          }
        }>

          


 

 
    <Box p={3} bgcolor="#f6f7fb" minHeight="100vh">
      {/* Top Filters */}
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <ToggleButtonGroup
          value={range}
          exclusive
          onChange={(e, v) => v && setRange(v)}
          sx={{border:'1px solid green'}}
        >
          <ToggleButton     value="today">Today</ToggleButton>
          <ToggleButton sx={{color:'#1E4A28'}} value="week">This Week</ToggleButton>
          <ToggleButton sx={{color:'#1E4A28'}} value="month">This Month</ToggleButton>
        </ToggleButtonGroup>

        <Select size="small" value={type} onChange={(e) => setType(e.target.value)} sx={{height:50,border:'1px solid #1E4A28',color:'#1E4A28',outlineColor:'#1E4A28'}}>
          <MenuItem sx={{color:'#1E4A28'}} value="all">All Types</MenuItem>
          <MenuItem sx={{color:'#1E4A28'}} value="startup">Startup</MenuItem>
          <MenuItem sx={{color:'#1E4A28'}} value="mentor">Mentor</MenuItem>
        </Select>

        <Button
          variant="outlined"
          startIcon={<CalendarMonthIcon />}
          size="small"
          sx={{height:50,color:'#1E4A28',border:'1px solid #1E4A28'}}
        >
          April 24, 2024
        </Button>

        <TextField
        sx={{height:50,borderColor:'#1E4A28'}}
          size="small"
          placeholder="Search"
          InputProps={{
            endAdornment: <SearchIcon color="action" />,
          }}
        />

        <IconButton>
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" p={2}>
          <Box fontWeight="bold">Activity Log</Box>
          <Button startIcon={<DownloadIcon />} variant="outlined" sx={{color:'#1E4A28',borderColor:'#1E4A28'}} size="small">
            Export CSV
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{color:'#1E4A28'}}>Time</TableCell>
              <TableCell sx={{color:'#1E4A28'}}>Action</TableCell>
              <TableCell sx={{color:'#1E4A28'}}>User / Startup</TableCell>
              <TableCell sx={{color:'#1E4A28'}}>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getColor(row.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
 

        </Box>

      </Box>


    </Box>

    </Box>
    
  )
}

export default DailyStats
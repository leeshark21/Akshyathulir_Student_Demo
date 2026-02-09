import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import StatCard from '../../components/Dashboard/StatCard';
import SectorDonutChart from '../../components/Dashboard/Charts/SectorDonutChart';
import GrowthTrendChart from '../../components/Dashboard/Charts/GrowthTrendChart';
import FundingBarChart from '../../components/Dashboard/Charts/FundingBarChart';

const Overview = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Dashboard Overview
      </Typography>

      {/* KPI Cards Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Incubated Startups"
            value="124"
            icon={<BusinessIcon fontSize="large" />}
            color="#1E4A28"
            subtext="+12% from last year"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Graduated Companies"
            value="45"
            icon={<SchoolIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="36% success rate"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Funding Raised"
            value="$12.5M"
            icon={<MonetizationOnIcon fontSize="large" />}
            color="#FFC107" // Gold for money
            subtext="Avg $100k per startup"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Active Mentors"
            value="68"
            icon={<EmojiEventsIcon fontSize="large" />}
            color="#1565C0"
            subtext="5 new this month"
            trend="up"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        <Grid size={6} md={8}>
          <GrowthTrendChart />
        </Grid>
        <Grid size={6} md={4}>
          <SectorDonutChart />
        </Grid>
      </Grid>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={12} md={12}>
           <Typography variant="h6" sx={{ mb: 2, mt: 2, color: '#1E4A28' }}>
            Financial Overview
          </Typography>
          <FundingBarChart />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Overview;

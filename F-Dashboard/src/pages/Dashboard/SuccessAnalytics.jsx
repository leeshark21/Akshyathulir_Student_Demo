import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import StatCard from '../../components/Dashboard/StatCard';
import SuccessRatioChart from '../../components/Dashboard/Success/SuccessRatioChart';
import RevenueGrowthChart from '../../components/Dashboard/Success/RevenueGrowthChart';
import ExitStats from '../../components/Dashboard/Success/ExitStats';
import SuccessTable from '../../components/Dashboard/Success/SuccessTable';

const SuccessAnalytics = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Success Rate Analytics
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Success Ratio"
            value="38%"
            icon={<EmojiEventsIcon fontSize="large" />}
            color="#1E4A28"
            subtext="Meeting all criteria"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Revenue Contribution"
            value="$15.2M"
            icon={<MonetizationOnIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="Cumulative FY 2024"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Scale-up Startups"
            value="39"
            icon={<RocketLaunchIcon fontSize="large" />}
            color="#1565C0"
            subtext="Reached Series A+"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Successful Exits"
            value="15"
            icon={<TrendingUpIcon fontSize="large" />}
            color="#FFC107"
            subtext="Acquisitions & IPOs"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={4}>
          <SuccessRatioChart />
        </Grid>
        <Grid size={12} md={5}>
          <RevenueGrowthChart />
        </Grid>
        <Grid size={12} md={3}>
          <ExitStats />
        </Grid>
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3}>
        <Grid size={12}>
          <SuccessTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuccessAnalytics;

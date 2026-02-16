
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import StatCard from '../../components/Dashboard/StatCard';

import RevenueGrowthChart from '../../components/Dashboard/Success/RevenueGrowthChart';

import SuccessTable from '../../components/Dashboard/Success/SuccessTable';
import { useContext } from 'react';
import { SuccessCreate } from '../../components/Dashboard/Success/SuccessContex/SucessContext';
import CountUp from '../../CountUp/Countup';

const SuccessAnalytics = () => {

  const { success } = useContext(SuccessCreate);

  const totalStartup = success?.length || 0;

  const scaleUps = success.filter(item => item.scaleUpStatus === "Scale-up").length;

  const exits = success.filter(item => item.exitStatus === "Exited").length;

  const totalRevenue = success.reduce((sum, item) => sum + item.revenueGrowth, 0);

  const successRatio = totalStartup ? Math.round((scaleUps + exits) / totalStartup * 100).toFixed(0) : 0;



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
            value={<CountUp end={successRatio} suffix='%' />}
            icon={<EmojiEventsIcon fontSize="large" />}
            color="#1E4A28"
            subtext="Meeting all criteria"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Revenue Contribution"
            value={<CountUp end={totalRevenue} prefix='₹' isCurrency={true} />}
            icon={<MonetizationOnIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="Cumulative FY 2024"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Scale-up Startups"
            value={<CountUp end={scaleUps} />}
            icon={<RocketLaunchIcon fontSize="large" />}
            color="#1565C0"
            subtext="Reached Series A+"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Successful Exits"
            value={<CountUp end={exits} />}
            icon={<TrendingUpIcon fontSize="large" />}
            color="#FFC107"
            subtext="Acquisitions & IPOs"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>

        <Grid size={12} md={5}>
          <RevenueGrowthChart />
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

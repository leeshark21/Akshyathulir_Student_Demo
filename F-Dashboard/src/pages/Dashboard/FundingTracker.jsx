import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SavingsIcon from '@mui/icons-material/Savings';
import PieChartIcon from '@mui/icons-material/PieChart';

import StatCard from '../../components/Dashboard/StatCard';
import FundingStageChart from '../../components/Dashboard/Funding/FundingStageChart';
import BurnRateChart from '../../components/Dashboard/Funding/BurnRateChart';
import UtilizationProgress from '../../components/Dashboard/Funding/UtilizationProgress';
import FundingTable from '../../components/Dashboard/Funding/FundingTable';

const FundingTracker = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Funding Utilization Tracker
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Allocated"
            value="$18.5M"
            icon={<AccountBalanceWalletIcon fontSize="large" />}
            color="#1E4A28"
            subtext="FY 2025-26"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Utilized"
            value="$8.2M"
            icon={<PriceCheckIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="44% of budget"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Remaining Funds"
            value="$10.3M"
            icon={<SavingsIcon fontSize="large" />}
            color="#1565C0"
            subtext="Available for disbursement"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Avg. Utilization"
            value="68%"
            icon={<PieChartIcon fontSize="large" />}
            color="#FFC107"
            subtext="Per startup"
          />
        </Grid>
      </Grid>

      {/* Charts Section 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={4}>
          <FundingStageChart />
        </Grid>
        <Grid size={12} md={8}>
          <BurnRateChart />
        </Grid>
      </Grid>
      
       {/* Charts Section 2 - Mixed with Progress */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={5}>
          <UtilizationProgress />
        </Grid>
        <Grid size={12} md={7}>
          {/* We could reuse or add another chart here, but table is next. 
              Let's put the table in this slot? No, table should be full width maybe?
              Let's make Table Full Width next row.
              Actually let's just leave this empty or stretch the progress?
              Let's just use 12 columns for Table.
           */}
           <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#e0f2f1', borderRadius: 2, border: '1px dashed #1E4A28', color: '#1E4A28' }}>
              <Typography variant="h6">Comparison Widget / Future Expansion</Typography>
           </Box>
        </Grid>
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3}>
        <Grid size={12}>
          <FundingTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FundingTracker;

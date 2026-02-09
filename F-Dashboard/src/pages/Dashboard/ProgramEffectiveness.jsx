import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScoreIcon from '@mui/icons-material/Score';
import StarIcon from '@mui/icons-material/Star';

import StatCard from '../../components/Dashboard/StatCard';
import CompletionRateChart from '../../components/Dashboard/Program/CompletionRateChart';
import SurvivalRateChart from '../../components/Dashboard/Program/SurvivalRateChart';
import BenchmarkRadarChart from '../../components/Dashboard/Program/BenchmarkRadarChart';
import CohortComparisonChart from '../../components/Dashboard/Program/CohortComparisonChart';
import ProgramTable from '../../components/Dashboard/Program/ProgramTable';

const ProgramEffectiveness = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Program Effectiveness & Outcomes
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Avg. Completion Rate"
            value="89%"
            icon={<AssignmentTurnedInIcon fontSize="large" />}
            color="#1E4A28"
            subtext="+5% vs last cohort"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Startup Survival Rate"
            value="92%"
            icon={<TrendingUpIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="After 12 months"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Overall KPI Score"
            value="4.7/5"
            icon={<ScoreIcon fontSize="large" />}
            color="#1565C0"
            subtext="Above benchmarks"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="High Performers"
            value="18"
            icon={<StarIcon fontSize="large" />}
            color="#FFC107"
            subtext="Exceeding all targets"
            trend="up"
          />
        </Grid>
      </Grid>

      {/* Charts Section 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={4}>
          <CompletionRateChart />
        </Grid>
        <Grid size={12} md={8}>
          <SurvivalRateChart />
        </Grid>
      </Grid>

      {/* Charts Section 2 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={6}>
          <CohortComparisonChart />
        </Grid>
        <Grid size={12} md={6}>
          <BenchmarkRadarChart />
        </Grid>
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3}>
        <Grid size={12}>
          <ProgramTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProgramEffectiveness;

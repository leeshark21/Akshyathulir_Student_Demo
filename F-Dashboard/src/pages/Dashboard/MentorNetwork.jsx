import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import StatCard from '../../components/Dashboard/StatCard';
import ExpertiseChart from '../../components/Dashboard/Mentor/ExpertiseChart';
import EngagementChart from '../../components/Dashboard/Mentor/EngagementChart';
import MentorTable from '../../components/Dashboard/Mentor/MentorTable';

const MentorNetwork = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Mentor Network Management
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Mentors"
            value="150"
            icon={<PeopleIcon fontSize="large" />}
            color="#1E4A28"
            subtext="Registered in system"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Mentors"
            value="98"
            icon={<AssignmentIndIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="Currently mentoring"
            trend="up"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Inactive Mentors"
            value="52"
            icon={<PersonOffIcon fontSize="large" />}
            color="#757575"
            subtext="Available for assignment"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Avg. Engagement Score"
            value="4.8/5"
            icon={<StarIcon fontSize="large" />}
            color="#FFC107"
            subtext="Based on feedback"
            trend="up"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <ExpertiseChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <EngagementChart />
        </Grid>
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MentorTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorNetwork;

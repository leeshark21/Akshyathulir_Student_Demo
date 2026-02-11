import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import StatCard from '../../components/Dashboard/StatCard';
import ExpertiseChart from '../../components/Dashboard/Mentor/ExpertiseChart';
import EngagementChart from '../../components/Dashboard/Mentor/EngagementChart';
import MentorTable from '../../components/Dashboard/Mentor/MentorTable';
import { MentorContext } from '../../components/Dashboard/Mentor/context/mentorContext';
import CountUp from '../../CountUp/Countup';

const MentorNetwork = () => {

  const {stats} = useContext(MentorContext);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4, color: '#1E4A28', fontWeight: 'bold' }}>
        Mentor Network Management
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Mentors"
             
            value={<CountUp end={stats?.totalMentor || 0} />}
            icon={<PeopleIcon fontSize="large" />}
            color="#1E4A28"
            subtext="Registered in system"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Active Mentors"
             value={<CountUp end={stats?.activeMember||0} />}
            icon={<AssignmentIndIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="Currently mentoring"
            trend="up"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Inactive Mentors"
             value={<CountUp end={stats?.inactiveMember||0} />}
            icon={<PersonOffIcon fontSize="large" />}
            color="#757575"
            subtext="Available for assignment"
          />
        </Grid>
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Avg. Engagement Score"
             value={<CountUp end={stats?.TotalEngagement || 0} />}
            icon={<StarIcon fontSize="large" />}
            color="#FFC107"
            subtext="Based on feedback"
            trend="up"
          />
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={12} md={6}>
          <ExpertiseChart />
        </Grid>
        <Grid size={12} md={6}>
          <EngagementChart />
        </Grid>
      </Grid>

      {/* Table Section */}
      <Grid container spacing={3}>
        <Grid size={12}>
          <MentorTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorNetwork;

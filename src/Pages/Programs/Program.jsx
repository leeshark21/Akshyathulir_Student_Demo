import * as React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddIcon from "@mui/icons-material/Add";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import EcoIcon from "@mui/icons-material/Eco";


import ProgramCard from "../../Components/ProgramsComponnts/ProgramCard";
import FundingProgress from "../../Components/ProgramsComponnts/FundingProgress";

const Programs = () => {
  return (
    <Box p={4}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight={700}>
          Programs
        </Typography>

        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2 }}
        >
          Add Program
        </Button>
      </Box>

      {/* Program Cards */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ProgramCard
            title="AI Innovation Bootcamp"
            icon={<PsychologyIcon color="success" />}
            date="Jan 15, 2024 - Mar 15, 2024"
            startups={12}
            success={75}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ProgramCard
            title="HealthTech Accelerator"
            icon={<LocalHospitalIcon color="success" />}
            date="Feb 01, 2024 - Apr 01, 2024"
            startups={10}
            success={80}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <ProgramCard
            title="GreenTech Program"
            // icon={<EcoIcon color="success" />}
            date="Apr 10, 2024 - Jun 10, 2024"
            startups={8}
            success={70}
          />
        </Grid>
      </Grid>

      {/* Funding Overview */}
      <Paper
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 3,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h6" fontWeight={600} mb={3}>
          Funding Overview
        </Typography>

        <Box display="flex" flexDirection="column" gap={3}>
          <FundingProgress
            title="AI Innovation Bootcamp"
            value={120}
            total={200}
          />
          <FundingProgress
            title="HealthTech Accelerator"
            value={150}
            total={200}
          />
          <FundingProgress
            title="GreenTech Program"
            value={75}
            total={150}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default Programs;
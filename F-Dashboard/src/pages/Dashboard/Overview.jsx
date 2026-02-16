import { useContext } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BusinessIcon from "@mui/icons-material/Business";
import SchoolIcon from "@mui/icons-material/School";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import StatCard from "../../components/Dashboard/StatCard";
import SectorDonutChart from "../../components/Dashboard/Charts/SectorDonutChart";
import GrowthTrendChart from "../../components/Dashboard/Charts/GrowthTrendChart";
import FundingBarChart from "../../components/Dashboard/Charts/FundingBarChart";

import { SuccessCreate } from "../../components/Dashboard/Success/SuccessContex/SucessContext";
import { MentorContext } from "../../components/Dashboard/Mentor/context/MentorContext";
import { FundingProvider } from "../../components/Dashboard/Funding/FundingContext/FundingContex";

import CountUp from "../../CountUp/Countup";

const Overview = () => {

  // 🔹 Get Context Data
  const { success } = useContext(SuccessCreate);
  const { stats } = useContext(MentorContext);
  const { fundtable } = useContext(FundingProvider);

  // 🔹 Safe Calculations

  const totalStartups = success?.length || 0;

  const graduatedCompanies =
    success?.filter(item => item.scaleUpStatus === "Scale-up").length || 0;

  const totalFunding =
    fundtable?.reduce(
      (sum, item) => sum + Number(item.allocated || 0),
      0
    ) || 0;

  const activeMentors = stats?.activeMember || 0;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 4, color: "#1E4A28", fontWeight: "bold" }}
      >
        Dashboard Overview
      </Typography>

      {/* KPI Cards Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>

        {/* Total Startups */}
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Incubated Startups"
            value={<CountUp end={totalStartups} />}
            icon={<BusinessIcon fontSize="large" />}
            color="#1E4A28"
            subtext="All registered startups"
            trend="up"
          />
        </Grid>

        {/* Graduated Companies */}
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Graduated Companies"
            value={<CountUp end={graduatedCompanies} />}
            icon={<SchoolIcon fontSize="large" />}
            color="#4CAF7A"
            subtext="Scale-up stage startups"
            trend="up"
          />
        </Grid>

        {/* Total Funding */}
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Total Funding Raised"
            value={
              <CountUp
                end={totalFunding}
                prefix="₹"
                isCurrency={true}
              />
            }
            icon={<MonetizationOnIcon fontSize="large" />}
            color="#FFC107"
            subtext="Combined funding support"
          />
        </Grid>

        {/* Active Mentors */}
        <Grid size={4} sm={6} md={3}>
          <StatCard
            title="Active Mentors"
            value={<CountUp end={activeMentors} />}
            icon={<EmojiEventsIcon fontSize="large" />}
            color="#1565C0"
            subtext="Currently active members"
            trend="up"
          />
        </Grid>

      </Grid>

      {/* Charts Section */}
      <Grid container spacing={3}>
        <Grid size={12} md={8}>
          <GrowthTrendChart />
        </Grid>

        <Grid size={12} md={4}>
          <SectorDonutChart />
        </Grid>
      </Grid>

      {/* Financial Overview */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={12}>
          <Typography
            variant="h6"
            sx={{ mb: 2, mt: 2, color: "#1E4A28" }}
          >
            Financial Overview
          </Typography>

          <FundingBarChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;

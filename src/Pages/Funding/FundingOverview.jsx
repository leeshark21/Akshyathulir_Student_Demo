import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FundingSummaryCards from "../../Components/FundingSummaryCards";
import FundingCharts from "../../Components/FundingCharts";
import FundingStatusTable from "../../Components/FundingStatusTable";

export default function FundingOverview() {
  return (
    <Box p={4} bgcolor="#f6faf6" minHeight="100vh">
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Funding Overview
      </Typography>

      <FundingSummaryCards />
      <Box my={4}>
        <FundingCharts />
      </Box>
      <FundingStatusTable />
    </Box>
  );
}
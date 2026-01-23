import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PieChartIcon from "@mui/icons-material/PieChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const data = [
  {
    title: "Total Funds Allocated",
    value: "$12,500,000",
    subtitle: "Allocated this fiscal year",
    icon: <TrendingUpIcon />,
  },
  {
    title: "Funds Utilized",
    value: "$7,200,000",
    subtitle: "57.6% of total",
    icon: <PieChartIcon />,
  },
  {
    title: "Remaining Balance",
    value: "$5,300,000",
    subtitle: "Available for deployment",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: "Active Funded Startups",
    value: "45",
    subtitle: "Currently receiving funding",
    icon: <RocketLaunchIcon />,
  },
];

export default function FundingSummaryCards() {
  return (
    <Grid container spacing={2}>
      {data.map((item, i) => (
        <Grid item xs={12} md={3} key={i}>
          <Card sx={{  width: 288,
                    height: 160,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                     bgcolor: 'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#1E4A28',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography fontWeight={600}>{item.title}</Typography>
                  <Typography variant="h6" color="success.main">
                    {item.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
                <Box color="success.main">{item.icon}</Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
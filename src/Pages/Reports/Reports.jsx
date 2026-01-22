import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PieChartIcon from "@mui/icons-material/PieChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";

const StatCard = ({ icon, title, value }) => (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 288,
        height: 150,
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
        },
    }}>
        <CardContent >
            {icon}
            <Box>
                <Typography variant="body2" color="text.secondary">
                    {title}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                    {value}
                </Typography>
            </Box>
        </CardContent>
    </Card>
);

const ReportCard = ({ icon, title, line1, line2 }) => (
    <Card  sx={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-between',
              width: 280,
              height: 300,
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
              },
            }}>
        <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
                {icon}
                <Typography variant="h6" sx={{fontSize:19}}>{title}</Typography>
            </Box>

            <Typography variant="body2" color="text.secondary">
                • {line1}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                • {line2}
            </Typography>

            <Button
                variant="contained"
                color="success"
                sx={{ mt: 10, borderRadius: 2, width:200 , height:50 }}
            >
                View Report
            </Button>
        </CardContent>
    </Card>
);

export default function Reports() {
    const [tab, setTab] = React.useState(0);

    return (
        <Box p={4} bgcolor="#f6f7f9" minHeight="100vh">
            {/* Header */}
            <Box display="flex" justifyContent="space-between" mb={3}>
                <Typography variant="h5" fontWeight="bold">
                    Reports
                </Typography>
                <Button variant="contained" color="success">
                    + Add Funding
                </Button>
            </Box>

            {/* Top Stats */}
            <Grid container spacing={2} mb={3}>
                <Grid item xs={12} md={4}>
                    <StatCard
                        icon={<PieChartIcon  color="success" />}
                        title="Total Funding"
                        value="$340,000"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatCard
                        icon={<TrendingUpIcon color="success" />}
                        title="Utilized"
                        value="$230,000"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <StatCard
                        icon={<AccountBalanceWalletIcon color="success" />}
                        title="Remaining"
                        value="$110,000"
                    />
                </Grid>
            </Grid>

            {/* Tabs & Search */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
            >
                <Tabs
                    value={tab}
                    onChange={(e, v) => setTab(v)}
                    textColor="success"
                    indicatorColor="success"
                >
                    <Tab  sx={{ color: '#1E4A28' }} label="Funding Requests" />
                    <Tab label="Funding Overview" />
                </Tabs>

                <TextField
                    size="small"
                    placeholder="Search startups..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Report Cards */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <ReportCard
                        icon={<PieChartIcon color="success" />}
                        title="Portfolio Summary"
                        line1="30 Startups Incubated"
                        line2="20% Growth"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <ReportCard
                        icon={<GroupIcon color="success" />}
                        title="Mentor Activity"
                        line1="65 Sessions Held"
                        line2="Avg Rating: 4.8 / 5"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <ReportCard
                        icon={<AttachMoneyIcon color="success" />}
                        title="Funding Utilization"
                        line1="$340k Total Funding"
                        line2="$110k Remaining Funds"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <ReportCard
                        icon={<BarChartIcon color="success" />}
                        title="Success Metrics"
                        line1="78% Success Rate"
                        line2="25 Startups to Market"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
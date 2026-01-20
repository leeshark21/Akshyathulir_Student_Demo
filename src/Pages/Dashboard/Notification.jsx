import * as React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Dashboard from "./Dashboard";

const data = [
  {
    id: 1,
    icon: <RocketLaunchIcon sx={{color:'green'}}/>,
    title: "ABC Tech applied for incubation.",
    time: "12 mins ago · View application",
    unread: true,
  },
  {
    id: 2,
    icon: <PersonIcon sx={{color:'green'}} />,
    title: "Mentor Jane Smith accepted your session request for 3:00 PM",
    time: "1 hour ago · Mark as read",
    unread: true,
  },
  {
    id: 3,
    icon: <MonetizationOnIcon sx={{color:'green'}}/>,
    title: "Funding deadline approaching. Submit your pitch deck by tomorrow.",
    time: "2 hours ago · Mark as read",
    unread: false,
  },
  {
    id: 4,
    icon: <EventIcon sx={{color:'green'}} />,
    title: "Reminder: Networking Event at 6:00 PM. Don’t miss it!",
    time: "5 hours ago · Mark as read",
    unread: false,
  },
];

export default function Notification({ openSidebar }) {
  return (
    <Box>
       <Dashboard openSidebar={openSidebar}/> 
        <Box sx={{ mt:-60, p: 4, background: "#f5f7fb", minHeight: "100vh", ml: openSidebar ? '240px' : '0px' }}>
     
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Notifications
      </Typography>

      {/* Top Buttons */}
      <Stack direction="row" spacing={2} mb={3}>
        <Button sx={{bgcolor:'green'}} variant="contained" startIcon={<CheckCircleIcon />}>
          Mark all as read
        </Button>
        <Button sx={{border:'1px solid green',color:'green'}} variant="outlined" startIcon={<FilterListIcon />}>
          Filter by Type
        </Button>
        <Button sx={{border:'1px solid green',color:'green'}}  variant="outlined">Clear All</Button>
      </Stack>

      {/* Card */}
      <Card sx={{ borderRadius: 3, boxShadow: 3,width:1200 }}>
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <NotificationsIcon color="success" />
            <Typography fontWeight="bold">Notifications</Typography>
          </Stack>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
        <Divider />

        {/* List */}
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: item.unread ? "#eef4ff" : "#fff",
              borderBottom: "1px solid #eee",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {item.unread && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                  }}
                />
              )}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  bgcolor: "#f0f3ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.time}
                </Typography>
              </Box>
            </Stack>
            <Button sx={{border:'1px solid green',color:'green'}}  variant="outlined" size="small">
              Mark as read
            </Button>
          </Box>
        ))}
      </Card>
    </Box>
    </Box>
    
  );
}
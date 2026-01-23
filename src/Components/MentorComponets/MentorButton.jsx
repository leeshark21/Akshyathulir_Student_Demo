import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate } from "react-router-dom";

const buttonData = [
  {
    title: "Add Mentor",
    icon: <AddIcon fontSize="large" />,
    color: "#E3F2FD",
    path: "/AddMentor",
  },
  {
    title: "Assign Startup",
    icon: <PsychologyIcon fontSize="large" />,
    color: "#F3E5F5",
    path: "/AssignStartup",
  },
  {
    title: "Schedule Session",
    icon: <LocalHospitalIcon fontSize="large" />,
    color: "#E8F5E9",
    path: "/ScheduleSession",
  },
  {
    title: "Upload Resource",
    icon: <RecyclingIcon fontSize="large" />,
    color: "#FFFDE7",
    path: "/UploadResource",
  },
];

export default function MentorButton() {
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Grid container spacing={3}>
        {buttonData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              onClick={() => navigate(item.path)}   // ✅ ROUTE LINK
              sx={{
                p: 3,
                px: 9.8,
                textAlign: "center",
                borderRadius: 3,
                backgroundColor: item.color,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: 6,
                },
              }}
            >
              <Box display="flex" justifyContent="center" mb={1}>
                {item.icon}
              </Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

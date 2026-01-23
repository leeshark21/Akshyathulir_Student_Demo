import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Select from '@mui/material/Select';
import FilterListIcon from "@mui/icons-material/FilterList";
import PeopleIcon from "@mui/icons-material/People";
import MentorButton from "../../components/MentorComponents/MentorButton";

/* -------------------- SAMPLE DATA -------------------- */
const mentors = [
  {
    name: "Dr. Anya Sharma",
    skill: "AI & Machine Learning",
    status: "Available",
    color: "success",
  },
  {
    name: "David Lee",
    skill: "Fintech & Blockchain",
    status: "Busy",
    color: "default",
  },
  {
    name: "Maria Rodriguez",
    skill: "Sustainable Energy",
    status: "Available",
    color: "success",
  },
  {
    name: "Janna Beata",
    skill: "Fintech & Frontend",
    status: "Unavailable",
    color: "default",
  },
  {
    name: "Jenn Sulson",
    skill: "Sustainable Energy",
    status: "Available",
    color: "success",
  },
];

export default function Assignmentor() {
  const [tab, setTab] = useState(0);
  const [selectedMentor, setSelectedMentor] = useState("");

  return (
    <Box mt={5} p={3} bgcolor="#f3faf6" minHeight="100vh">
      <MentorButton />
      <Grid container spacing={3}>

        {/* ================= LEFT PANEL ================= */}
        <Grid size={7}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Mentor-Startup Assignment
              </Typography>

              <Stack direction="row" spacing={2} mb={3}>
                <TextField
                  size="small"
                  placeholder="Search..."
                  fullWidth
                />
                <Button
                  variant="outlined"
                  startIcon={<FilterListIcon />}
                >
                  Filter
                </Button>
              </Stack>

              <Stack spacing={2}>
                {mentors.map((mentor, index) => (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: 3,
                      border: "1px solid #e0e0e0",
                      transition: "0.2s",
                      "&:hover": {
                        bgcolor: "#eaf7ef",
                      },
                    }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar sx={{ width: 56, height: 56 }} />

                        <Box flex={1}>
                          <Typography fontWeight={600}>
                            {mentor.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {mentor.skill}
                          </Typography>

                          <Stack direction="row" spacing={1} mt={1} alignItems="center">
                            <Chip
                              size="small"
                              label={mentor.status}
                              color={mentor.color}
                            />
                            <PeopleIcon fontSize="small" />
                            <Typography variant="caption">
                              3 Startups assigned
                            </Typography>
                          </Stack>
                        </Box>

                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#2e7d32",
                            borderRadius: 20,
                            px: 3,
                            "&:hover": { bgcolor: "#1b5e20" }
                          }}
                        >
                          Assign
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* ================= RIGHT PANEL ================= */}
        <Grid size={5}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>

              <Typography variant="h6" fontWeight={700} mb={2}>
                Selected Startup Details
              </Typography>

              <Card sx={{ bgcolor: "#eaf7ef", borderRadius: 3, mb: 3 }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ bgcolor: "#2e7d32" }}>E</Avatar>
                    <Box>
                      <Typography fontWeight={700}>
                        EcoSolutions
                      </Typography>
                      <Typography variant="body2">
                        Domain: Cleantech
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>

              <Typography variant="h5" fontWeight={700} mb={2}>
                Stage: MVP
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Typography>Team Size: <b>5 Members</b></Typography>
              <Typography mb={3}>
                Current Mentor: <b>None (Pending Assignment)</b>
              </Typography>

              <Typography fontWeight={600} mb={1}>
                Select Mentor
              </Typography>

              <Stack direction="row" spacing={2} mb={2}>
                <Select
                  size="small"
                  fullWidth
                  value={selectedMentor}
                  displayEmpty
                  onChange={(e) => setSelectedMentor(e.target.value)}
                >
                  <MenuItem value="">Choose a mentor...</MenuItem>
                  {mentors.map((m, i) => (
                    <MenuItem key={i} value={m.name}>
                      {m.name}
                    </MenuItem>
                  ))}
                </Select>

                <Button
                  variant="contained"
                  sx={{
                    fontSize: 14,
                    bgcolor: "#2e7d32",
                    borderRadius: 20,
                    px: 10,
                    "&:hover": { bgcolor: "#1b5e20" }
                  }}
                >
                  AssignMentor
                </Button>
              </Stack>

              <Typography variant="caption" color="green">
                Ready to assign mentor to EcoSolutions.
              </Typography>
              <br />
              <Button
                variant="outlined"
                sx={{ mt: 2, borderRadius: 20, color: "green" }}
              >
                Cancel
              </Button>

              <Divider sx={{ my: 3 }} />

              <Tabs
                value={tab}
                onChange={(e, v) => setTab(v)}
                textColor="success"
                indicatorColor="success"
              >
                <Tab label="Recent Activity" />
                <Tab label="Notes" />
              </Tabs>

              <Box mt={2}>
                {tab === 0 && (
                  <Typography variant="body2">
                    • Mentor assignment pending<br />
                    • Startup created MVP<br />
                    • Awaiting review
                  </Typography>
                )}
                {tab === 1 && (
                  <Typography variant="body2">
                    Add mentor notes and feedback here.
                  </Typography>
                )}
              </Box>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}
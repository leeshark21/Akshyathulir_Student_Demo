import * as React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import MentorButton from "../../Components/MentorComponets/MentorButton";

export default function MentorSchedule() {
  const [view, setView] = React.useState("day");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Box sx={{ mt:4,p: 3, backgroundColor: "#f6f8f9", minHeight: "100vh" }}>
      <MentorButton/>
      <Paper sx={{ p: 3, borderRadius: 4 }} elevation={3}>
        {/* HEADER */}
        <Typography variant="h6" fontWeight={700} mb={3}>
          Mentor Schedule
        </Typography>

        {/* TOP CONTROLS */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ md: "center" }}
          mb={3}
        >
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={(e, val) => val && setView(val)}
          >
            <ToggleButton value="day">Day</ToggleButton>
            <ToggleButton value="week">Week</ToggleButton>
            <ToggleButton value="month">Month</ToggleButton>
          </ToggleButtonGroup>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<FilterListIcon />}
              sx={{ borderRadius: 3 }}
            >
              Start to
            </Button>

            <Select size="small" defaultValue="20 sessions">
              <MenuItem value="20 sessions">20 Sessions</MenuItem>
              <MenuItem value="10 sessions">10 Sessions</MenuItem>
            </Select>

            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#4CAF50",
                borderRadius: 3,
                px: 3,
                "&:hover": { backgroundColor: "#43a047" },
              }}
            >
              Add Session
            </Button>
          </Stack>
        </Stack>

        {/* STATUS FILTER */}
        <Stack direction="row" spacing={1} mb={3}>
          <Chip label="Upcoming" />
          <Chip label="Completed" sx={{ backgroundColor: "#424242", color: "#fff" }} />
          <Chip label="Canceled" sx={{ backgroundColor: "#F8B4A8" }} />
        </Stack>

        {/* CALENDAR HEADER */}
        <Grid container spacing={1} mb={1}>
          {days.map((day) => (
            <Grid item xs key={day}>
              <Typography align="center" fontWeight={600}>
                {day}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* CALENDAR GRID */}
        {[1, 2, 3, 4, 5].map((week) => (
          <Grid container spacing={1} key={week} mb={1}>
            {days.map((day, index) => (
              <Grid item xs key={index}>
                <Paper
                  sx={{
                    height: 110,
                    width:160,
                    p: 1,
                    borderRadius: 2,
                    position: "relative",
                  }}
                  variant="outlined"
                >
                  <Typography variant="caption" fontWeight={600}>
                    {week * 5 + index}
                  </Typography>

                  {/* GREEN SESSION */}
                  {week === 1 && index === 2 && (
                    <Paper
                      sx={{
                        mt: 1,
                        p: 1,
                        backgroundColor: "#C8E6C9",
                        borderRadius: 2,
                        fontSize: 12,
                      }}
                    >
                      EcoSolutions<br />
                      + Onsite
                    </Paper>
                  )}

                  {/* DARK SESSION */}
                  {week === 2 && index === 1 && (
                    <Paper
                      sx={{
                        mt: 1,
                        p: 1,
                        backgroundColor: "#424242",
                        color: "#fff",
                        borderRadius: 2,
                        fontSize: 12,
                      }}
                    >
                      FutemTech<br />
                      Online
                    </Paper>
                  )}

                  {/* CANCELED */}
                  {week === 1 && index === 5 && (
                    <Paper
                      sx={{
                        mt: 1,
                        p: 1,
                        backgroundColor: "#F8B4A8",
                        borderRadius: 2,
                        fontSize: 12,
                      }}
                    >
                      Canceled
                    </Paper>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Paper>
    </Box>
  );
}
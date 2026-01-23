import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MentorButton from "../../components/MentorComponents/MentorButton";

export default function AddMentor() {
  return (
    <Box sx={{ mt: 4, p: 3, backgroundColor: "#f6f8f9", minHeight: "100vh" }}>
      <MentorButton />
      <Grid container spacing={4}>
        {/* LEFT FORM */}
        <Grid size={7}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 4,
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3}>
              Add New Mentor
            </Typography>

            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField fullWidth label="Mentor Name" />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Email" />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Phone Number" />
              </Grid>

              <Grid size={6}>
                <Select fullWidth displayEmpty defaultValue="">
                  <MenuItem value="" disabled>
                    Domain
                  </MenuItem>
                  <MenuItem value="AI/ML">AI / ML</MenuItem>
                  <MenuItem value="Fintech">Fintech</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Clean Energy">Clean Energy</MenuItem>
                </Select>
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Area of Expertise" />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Years of Experience" type="number" />
              </Grid>

              <Grid size={6}>
                <TextField fullWidth label="Current Focus" />
              </Grid>

              <Grid size={6}>
                <Typography fontWeight={600} mb={1}>
                  Availability (days / time)
                </Typography>
                <Stack direction="row" spacing={2}>
                  <FormControlLabel control={<Checkbox />} label="Today" />
                  <FormControlLabel control={<Checkbox />} label="Weekdays" />
                </Stack>
              </Grid>

              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Short Bio"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>

            <Stack direction="row" spacing={2} mt={4}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50",
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#43a047",
                  },
                }}
              >
                Add Mentor
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Paper>
        </Grid>

        {/* RIGHT PREVIEW */}
        <Grid item size={5}>
          <Paper
            elevation={3}
            sx={{
              p: 4,

              borderRadius: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight={700} mb={3}>
              Mentor Profile Preview
            </Typography>

            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              sx={{
                width: 100,
                height: 100,
                mx: "auto",
                mb: 2,
              }}
            />

            <Typography variant="h6" fontWeight={700}>
              Flett Enton
            </Typography>

            <Typography color="text.secondary" mb={2}>
              Years of Experience
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              mb={3}
            >
              <CheckCircleIcon sx={{ color: "#4CAF50" }} />
              <Typography color="#4CAF50" fontWeight={600}>
                Verified
              </Typography>
              <Switch defaultChecked color="success" />
            </Stack>

            <TextField
              fullWidth
              disabled
              value="AI / ML, Clean Energy"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              disabled
              multiline
              rows={3}
              value="Experienced mentor with strong background in AI-driven clean energy solutions."
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
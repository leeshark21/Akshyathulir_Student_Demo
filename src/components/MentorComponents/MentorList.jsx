import * as React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';



const mentors = [
  {
    name: "Dr. Anil Kapoor",
    domain: "Business & Strategy",
    sponsors: "2 Startups",
    sessions: 10,
    stage: "MVP",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Reema Shah",
    domain: "Marketing",
    sponsors: "2 Startups",
    sessions: 8,
    stage: "MVP",
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Vikas Patel",
    domain: "AI / ML",
    sponsors: "3 Startups",
    sessions: 12,
    stage: "MP",
    img: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Sunita Iyer",
    domain: "Product Design",
    sponsors: "1 Startup",
    sessions: 11,
    stage: "Scale",
    img: "https://i.pravatar.cc/150?img=44",
  },
  {
    name: "Ravi Menon",
    domain: "Finance",
    sponsors: "2 Startups",
    sessions: 9,
    stage: "MP",
    img: "https://i.pravatar.cc/150?img=18",
  },
  {
    name: "Ayesha Basu",
    domain: "Software Engineering",
    sponsors: "1 Startup",
    sessions: 11,
    stage: "Incubator",
    img: "https://i.pravatar.cc/150?img=56",
  },
];

export default function MentorList() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f6f8f9", minHeight: "100vh" }}>
      {/* FILTER BAR */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={2} mb={4}>
        <TextField  fullWidth placeholder="Search by name..."  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#fff",
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#7c4dff",
    },
  }} />

        <Select fullWidth defaultValue="All"  sx={{
      borderRadius: "10px",
      backgroundColor: "#f4fff7",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
        borderWidth: 2,
      },
    }} >
          <MenuItem value="All">Domain: All</MenuItem>
          <MenuItem value="AI">AI / ML</MenuItem>
          <MenuItem value="Marketing">Marketing</MenuItem>
        </Select>

        <Select fullWidth defaultValue="All"  sx={{
      borderRadius: "10px",
      backgroundColor: "#f4fff7",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4caf50",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2e7d32",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2e7d32",
        borderWidth: 2,
      },
    }}>
          <MenuItem value="All">Startup: All</MenuItem>
          <MenuItem value="MVP">MVP</MenuItem>
          <MenuItem value="Scale">Scale</MenuItem>
        </Select>
      </Stack>

      {/* MENTOR CARDS */}
      <Box 
         sx={{display:'flex', flexWrap:"wrap" ,width:'100%',height:'100%',gap:2}} 
      > 
        {mentors.map((mentor, index) => (
          <Box  key={index}>
            <Paper
              elevation={3}
              sx={{
                 width: 373,
                    height: 300,
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
                    },
              }}
            >
              <Stack direction="row" spacing={2} mb={2}>
                <Avatar
                  src={mentor.img}
                  sx={{ width: 60, height: 60 }}
                />
                <Box>
                  <Typography fontWeight={700}>
                    {mentor.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {mentor.domain}
                  </Typography>
                </Box>
              </Stack>

              <Typography color="text.secondary" mb={0.5}>
                Sponsors: {mentor.sponsors}
              </Typography>
              <Typography color="text.secondary" mb={2}>
                {mentor.sessions} sessions Held
              </Typography>

              <Typography
                fontWeight={600}
                color="#2e7d32"
                mb={2}
              >
                Stage: {mentor.stage}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#4CAF50",
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#43a047",
                  },
                }}
              >
                View Details
              </Button>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StartupMenu from '../StartupMenu/StartupMenu';



import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SearchIcon from "@mui/icons-material/Search";


const startups = [
  { name: "ABC Tech", domain: "AI", stage: "MVP", city: "Chennai" },
  { name: "Innovatech", domain: "IoT", stage: "Market", city: "Bangalore" },
  { name: "GreenWave", domain: "CleanTech", stage: "MVP", city: "Hyderabad" },
  { name: "Stellar AI", domain: "AI", stage: "Idea", city: "Pune" },
  { name: "HealthCloud", domain: "HealthTech", stage: "Market", city: "Mumbai" },
  { name: "FinNext", domain: "FinTech", stage: "MVP", city: "Delhi" },
  { name: "EduVibe", domain: "EdTech", stage: "Idea", city: "Kolkata" },
  { name: "AgriGro", domain: "AgriTech", stage: "Market", city: "Jaipur" },
  { name: "BlueOcean Robotics", domain: "Robotics", stage: "MVP", city: "Gurgaon" },
  { name: "UrbanEats", domain: "FoodTech", stage: "Idea", city: "Chennai" },
];

const stageColor = (stage) => {
  if (stage === "MVP") return "info";
  if (stage === "Market") return "success";
  return "warning";
};


const AllStartups = () => {
  return (
    <>
      <Box>
        <StartupMenu />
      </Box>
      <Box>
        <Box>
          <Typography variant="h5" fontWeight="bold" ml={3} mb={2}>
            All Startup
          </Typography>
        </Box>
        <Box>
          <Box sx={{ p: 3, bgcolor: "#f5f6fa", minHeight: "100vh" }}>
            {/* Filter Bar */}
            <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  fullWidth
                  placeholder="Search startups..."
                  InputProps={{
                    startAdornment: <SearchIcon sx={{ mr: 1, color: "gray" }} />,
                  }}
                />
                <TextField select label="All Stages" defaultValue="All" sx={{ minWidth: 140 }}>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Idea">Idea</MenuItem>
                  <MenuItem value="MVP">MVP</MenuItem>
                  <MenuItem value="Market">Market</MenuItem>
                </TextField>
                <TextField select label="All Domains" defaultValue="All" sx={{ minWidth: 160 }}>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="AI">AI</MenuItem>
                  <MenuItem value="IoT">IoT</MenuItem>
                  <MenuItem value="FinTech">FinTech</MenuItem>
                </TextField>
                <TextField select label="Sort" defaultValue="Newest" sx={{ minWidth: 140 }}>
                  <MenuItem value="Newest">Newest</MenuItem>
                  <MenuItem value="Oldest">Oldest</MenuItem>
                </TextField>
                <Button sx={{ bgcolor: '#1E4A28', fontSize:{ xs: 12, sm: 0 } }} variant="contained" startIcon={<SearchIcon sx={{ ml:{xs:0 ,sm:1.5} }} />}>
                  Search
                </Button>
              </Stack>
            </Paper>

            {/* Table */}
            <Paper sx={{ borderRadius: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><b>Startup</b></TableCell>
                    <TableCell><b>Domain</b></TableCell>
                    <TableCell><b>Stage</b></TableCell>
                    <TableCell><b>City</b></TableCell>
                    <TableCell><b>Action</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {startups.map((s, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar>{s.name[0]}</Avatar>
                          <Box>
                            <b>{s.name}</b>
                            <Box
                              sx={{
                                mt: 0.5,
                                borderBottom: "2px dotted #bbb",
                                width: 80,
                              }}
                            />
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>{s.domain}</TableCell>
                      <TableCell>
                        <Chip
                          label={s.stage}
                          color={stageColor(s.stage)}
                          variant="outlined"
                          sx={{ borderRadius: 20 }}
                        />
                      </TableCell>
                      <TableCell>{s.city}</TableCell>
                      <TableCell>
                        <Button sx={{color:'#1E4A28' ,borderColor:'#1E4A28'}} variant="outlined" size="small">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default AllStartups






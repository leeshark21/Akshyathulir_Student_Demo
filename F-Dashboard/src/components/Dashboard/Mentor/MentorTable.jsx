import React, { useContext, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { MentorContext } from './context/mentorContext';
const MentorTable = () => {
  const {mentor} = useContext(MentorContext)
  const [searchTerm, setSearchTerm] = useState('');
  const filteredRows = mentor.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const getStatusColor = (status) => {
    switch (status) {
      case 'High': 
       return 'success';
      case 'Medium': 
       return 'warning';
      case 'Low': 
       return 'error';
      default: 
       return 'default';
    }
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" color="primary.main">
            Mentor List
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              size="small"
              placeholder="Search mentors..."
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Box>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="mentor table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Expertise</TableCell>
                <TableCell align="center">Startups Assigned</TableCell>
                <TableCell align="center">Sessions</TableCell>
                <TableCell align="center">Engagement</TableCell>
                <TableCell align="center">Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.expertise}</TableCell>
                  <TableCell align="center">{row.startupsAssigned}</TableCell>
                  <TableCell align="center">{row.sessions}</TableCell>
                  <TableCell align="center">
                    <Chip label={row.status} color={getStatusColor(row.status)} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell align="center">
                     <Chip 
                        label={row.availability} 
                        sx={{ bgcolor: row.availability === 'Active' ? '#E8F5E9' : '#FFEBEE', color: row.availability === 'Active' ? '#2E7D32' : '#C62828' }}
                        size="small" 
                      />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MentorTable;

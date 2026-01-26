import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Box,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const createData = (name, expertise, startups, sessions, status, availability) => {
  return { name, expertise, startups, sessions, status, availability };
};

const rows = [
  createData('Dr. Sarah Chen', 'Tech & AI', 3, 12, 'High', 'Active'),
  createData('Michael Ross', 'Business Strategy', 2, 8, 'Medium', 'Active'),
  createData('Jessica Pearson', 'Legal', 1, 4, 'Low', 'On Hold'),
  createData('David Kim', 'Marketing', 4, 15, 'High', 'Active'),
  createData('Amanda Low', 'Finance', 2, 6, 'Medium', 'Active'),
];

const MentorTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'High': return 'success';
      case 'Medium': return 'warning';
      case 'Low': return 'error';
      default: return 'default';
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
                  <TableCell align="center">{row.startups}</TableCell>
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

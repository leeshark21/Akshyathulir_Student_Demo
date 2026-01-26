import React from 'react';
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
  Chip
} from '@mui/material';

const rows = [
  { name: 'Summer Acceleration 2024', cohort: '2024', completion: '92%', survival: '98%', score: '4.8', status: 'Excellent' },
  { name: 'Winter Incubation 2023', cohort: '2023', completion: '85%', survival: '90%', score: '4.5', status: 'Good' },
  { name: 'Pre-Incubation 2023', cohort: '2023', completion: '78%', survival: '82%', score: '4.0', status: 'Average' },
  { name: 'DeepTech Scaleup 2022', cohort: '2022', completion: '95%', survival: '94%', score: '4.9', status: 'Excellent' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Excellent': return 'success';
    case 'Good': return 'info';
    case 'Average': return 'warning';
    default: return 'default';
  }
};

const ProgramTable = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Detailed Program Performance
        </Typography>
        <TableContainer>
          <Table aria-label="program performance table">
            <TableHead>
              <TableRow>
                <TableCell>Program Name</TableCell>
                <TableCell align="center">Cohort Year</TableCell>
                <TableCell align="center">Completion Rate</TableCell>
                <TableCell align="center">Survival Rate</TableCell>
                <TableCell align="center">KPI Score</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.cohort}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{row.completion}</TableCell>
                  <TableCell align="center">{row.survival}</TableCell>
                  <TableCell align="center">{row.score}</TableCell>
                  <TableCell align="center">
                    <Chip label={row.status} color={getStatusColor(row.status)} size="small" />
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

export default ProgramTable;

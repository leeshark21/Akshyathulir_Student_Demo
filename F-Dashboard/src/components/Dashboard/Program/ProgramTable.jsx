import React, { useContext } from 'react';
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
import { Programcontextcreate } from './ProgramContex/ProgramContext';
const getStatusColor = (status) => {
  switch (status) {
    case 'Excellent': return 'success';
    case 'Good': return 'info';
    case 'Average': return 'warning';
    default: return 'default';
  }
};

const ProgramTable = () => {
   const {table} =useContext(Programcontextcreate)
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
              {table.map((row,index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.programName}
                  </TableCell>
                  <TableCell align="center">{row.cohortYear}</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{row.completionRate}</TableCell>
                  <TableCell align="center">{row.survivalRate}</TableCell>
                  <TableCell align="center">{row.kpiScore}</TableCell>
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

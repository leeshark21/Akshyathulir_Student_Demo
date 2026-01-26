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
  { name: 'MediCare Plus', cohort: '2021', revenue: '+250%', funding: '$4.5M', status: 'Scale-up', exit: 'Pending' },
  { name: 'AgriSense', cohort: '2022', revenue: '+120%', funding: '$1.2M', status: 'Growth', exit: 'N/A' },
  { name: 'FinTech Solutions', cohort: '2020', revenue: '+500%', funding: '$12M', status: 'Exited', exit: 'Acquired' },
  { name: 'EduLearn', cohort: '2023', revenue: '+80%', funding: '$500K', status: 'Early Growth', exit: 'N/A' },
  { name: 'CyberSafe', cohort: '2021', revenue: '+300%', funding: '$8M', status: 'Scale-up', exit: 'IPO Prep' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Exited': return 'success';
    case 'Scale-up': return 'primary';
    case 'Growth': return 'info';
    default: return 'default';
  }
};

const SuccessTable = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Success Outcomes
        </Typography>
        <TableContainer>
          <Table aria-label="success table">
            <TableHead>
              <TableRow>
                <TableCell>Startup Name</TableCell>
                <TableCell>Cohort</TableCell>
                <TableCell align="center">Rev. Growth</TableCell>
                <TableCell align="center">Funding Raised</TableCell>
                <TableCell align="center">Scale-up Status</TableCell>
                <TableCell align="center">Exit Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.cohort}</TableCell>
                  <TableCell align="center" sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.revenue}</TableCell>
                  <TableCell align="center">{row.funding}</TableCell>
                  <TableCell align="center">
                    <Chip label={row.status} color={getStatusColor(row.status)} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell align="center">
                    {row.exit !== 'N/A' ? (
                       <Chip label={row.exit} color="secondary" size="small" />
                    ) : (
                      <Typography variant="caption" color="text.secondary">-</Typography>
                    )}
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

export default SuccessTable;

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

import { FundingProvider } from './FundingContext/FundingContex';
// const rows = [
//   { name: 'Solaris AI', stage: 'Series A', allocated: '$2,000,000', utilized: '$1,200,000', remaining: '$800,000', status: 'On Track' },
//   { name: 'GreenFields', stage: 'Seed', allocated: '$500,000', utilized: '$450,000', remaining: '$50,000', status: 'Critical' },
//   { name: 'MediTech Ops', stage: 'Series B', allocated: '$5,000,000', utilized: '$1,500,000', remaining: '$3,500,000', status: 'On Track' },
//   { name: 'EdVision', stage: 'Pre-Seed', allocated: '$100,000', utilized: '$20,000', remaining: '$80,000', status: 'Hold' },
//   { name: 'FinFlow', stage: 'Seed', allocated: '$600,000', utilized: '$300,000', remaining: '$300,000', status: 'On Track' },
// ];



const FundingTable = () => {

  const {fundtable}= useContext(FundingProvider)



  const getStatusColor = (burnStatus) => {
    switch (burnStatus) {
      case 'On Track': return 'success';
      case 'Critical': return 'error';
      case 'Hold': return 'warning';
      default: return 'default';
    }
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Startup Funding Ledger
        </Typography>
        <TableContainer>
          <Table aria-label="funding table">
            <TableHead>
              <TableRow>
                <TableCell>Startup Name</TableCell>
                <TableCell>Stage</TableCell>
                <TableCell align="right">Allocated</TableCell>
                <TableCell align="right">Utilized</TableCell>
                <TableCell align="right">Remaining</TableCell>
                <TableCell align="center">Burn Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fundtable.map((row,i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.startupName}
                  </TableCell>
                  <TableCell>{row.stage}</TableCell>
                  <TableCell align="right">{row.allocated}</TableCell>
                  <TableCell align="right">{row.utilized}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>{row.remaining}</TableCell>
                  <TableCell align="center">
                    <Chip label={row.burnStatus} color={getStatusColor(row.burnStatus)} size="small" variant="outlined" />
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

export default FundingTable;

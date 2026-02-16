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
import { SuccessCreate } from './SuccessContex/SucessContext';




const SuccessTable = () => {

  const{success} = useContext(SuccessCreate);

  const getStatusColor = (status) => {
  switch (status) {
    case 'Exited': return 'success';
    case 'Scale-up': return 'primary';
    case 'Growth': return 'info';
    default: return 'default';
  }
};


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
              {success.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                    {row.startupName}
                  </TableCell>
                  <TableCell>{row.cohort}</TableCell>
                  <TableCell align="center" sx={{ color: 'success.main', fontWeight: 'bold' }}>{row.revenueGrowth}</TableCell>
                  <TableCell align="center">{row.fundingRaised}</TableCell>
                  <TableCell align="center">
                    <Chip label={row.scaleUpStatus} color={getStatusColor(row.scaleUpStatus)} size="small" variant="outlined" />
                  </TableCell>
                  <TableCell align="center">
                    {row.exit !== 'N/A' ? (
                       <Chip label={row.exitStatus} color="secondary" size="small" />
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

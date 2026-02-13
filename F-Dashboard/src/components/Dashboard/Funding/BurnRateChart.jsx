import React, { useContext } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FundingProvider } from './FundingContext/FundingContex';
const data = [
  { month: 'Jan', Burn: 120 },
  { month: 'Feb', Burn: 132 },
  { month: 'Mar', Burn: 101 },
  { month: 'Apr', Burn: 134 },
  { month: 'May', Burn: 190 },
  { month: 'Jun', Burn: 230 },
  { month: 'Jul', Burn: 210 },
];

const BurnRateChart = () => {

  const {fundtable} =useContext(FundingProvider);

  const ChartData = fundtable.map(item=>({
    Name: item.startupName,
    Burn:item.utilized/1000
  }));
  
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
           Startup Burn Rate ($K)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={ChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="Name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Burn" stroke="#e57373" fill="#ef9a9a" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BurnRateChart;

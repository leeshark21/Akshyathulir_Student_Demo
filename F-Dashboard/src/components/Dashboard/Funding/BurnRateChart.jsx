import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

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
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Monthly Burn Rate ($K)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
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

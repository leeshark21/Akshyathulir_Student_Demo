import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { name: 'Seed', Allocated: 4000, Utilized: 2400 },
  { name: 'Series A', Allocated: 3000, Utilized: 1398 },
  { name: 'Series B', Allocated: 2000, Utilized: 9800 }, // Wait, logic might be off, let's say Series B is 2000 total?
  // Let's fix numbers to be realistic in '000s or similar
  { name: 'Seed', Allocated: 500, Utilized: 350 },
  { name: 'Series A', Allocated: 1200, Utilized: 900 },
  { name: 'Series B', Allocated: 3000, Utilized: 2100 },
  { name: 'Grant', Allocated: 200, Utilized: 180 },
];

const FundingBarChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Funding Utilization (in $K)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{fill: 'transparent'}}/>
              <Legend />
              <Bar dataKey="Allocated" fill="#1E4A28" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Utilized" fill="#4CAF7A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FundingBarChart;

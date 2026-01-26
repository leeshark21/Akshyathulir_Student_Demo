import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { name: 'Cohort 1', Revenue: 4000, Funding: 2400, amt: 2400 },
  { name: 'Cohort 2', Revenue: 3000, Funding: 1398, amt: 2210 },
  { name: 'Cohort 3', Revenue: 2000, Funding: 9800, amt: 2290 },
  { name: 'Cohort 4', Revenue: 2780, Funding: 3908, amt: 2000 },
];

const CohortComparisonChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Cohort Comparison (Revenue vs Funding)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Revenue" fill="#1E4A28" />
              <Bar dataKey="Funding" fill="#4CAF7A" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CohortComparisonChart;

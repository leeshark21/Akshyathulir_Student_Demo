import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { name: 'Jan', Active: 10, Graduated: 0 },
  { name: 'Feb', Active: 12, Graduated: 1 },
  { name: 'Mar', Active: 15, Graduated: 1 },
  { name: 'Apr', Active: 18, Graduated: 2 },
  { name: 'May', Active: 20, Graduated: 3 },
  { name: 'Jun', Active: 25, Graduated: 4 },
];

const GrowthTrendChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Incubation Growth Trend
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
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
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Active" stroke="#1E4A28" strokeWidth={3} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Graduated" stroke="#4CAF7A" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default GrowthTrendChart;

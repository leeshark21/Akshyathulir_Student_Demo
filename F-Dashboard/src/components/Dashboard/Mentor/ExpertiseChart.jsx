import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { name: 'Tech & Engineering', value: 45 },
  { name: 'Business Strategy', value: 35 },
  { name: 'Finance', value: 20 },
  { name: 'Marketing', value: 25 },
  { name: 'Legal', value: 10 },
  { name: 'Product & UX', value: 15 },
];

const COLORS = ['#1E4A28', '#2E7D32', '#4CAF7A', '#66BB6A', '#81C784', '#A5D6A7'];

const ExpertiseChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Mentor Expertise Distribution
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpertiseChart;

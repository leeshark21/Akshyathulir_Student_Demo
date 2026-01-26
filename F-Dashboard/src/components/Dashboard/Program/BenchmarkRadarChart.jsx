import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { subject: 'Revenue', A: 120, B: 110, fullMark: 150 },
  { subject: 'Funding', A: 98, B: 130, fullMark: 150 },
  { subject: 'Product', A: 86, B: 130, fullMark: 150 },
  { subject: 'Market', A: 99, B: 100, fullMark: 150 },
  { subject: 'Team', A: 85, B: 90, fullMark: 150 },
  { subject: 'Impact', A: 65, B: 85, fullMark: 150 },
];

const BenchmarkRadarChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          KPI Benchmarks (Actual vs Target)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Target" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Actual Performance" dataKey="A" stroke="#1E4A28" fill="#1E4A28" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BenchmarkRadarChart;

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, Typography, Box } from '@mui/material';

const data = [
  { month: 'Start', Cohort2023: 100, Cohort2024: 100 },
  { month: '6 Mos', Cohort2023: 95, Cohort2024: 98 },
  { month: '12 Mos', Cohort2023: 88, Cohort2024: 92 },
  { month: '18 Mos', Cohort2023: 80, Cohort2024: 85 },
  { month: '24 Mos', Cohort2023: 75, Cohort2024: 82 },
];

const SurvivalRateChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Startup Survival Trends
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
              <Area type="monotone" dataKey="Cohort2023" stackId="1" stroke="#1E4A28" fill="#1E4A28" fillOpacity={0.6} />
              <Area type="monotone" dataKey="Cohort2024" stackId="1" stroke="#4CAF7A" fill="#4CAF7A" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SurvivalRateChart;

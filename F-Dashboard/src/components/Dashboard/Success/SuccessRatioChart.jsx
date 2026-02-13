import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const data = [
  { name: 'Revenue Generating', value: 45 },
  { name: 'Funding Secured', value: 30 },
  { name: 'Market Validated', value: 15 },
  { name: 'Early Stage', value: 10 },
];

const COLORS = ['#1E4A28', '#4CAF7A', '#81C784', '#BDBDBD'];

const SuccessRatioChart = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Startup Success Distribution
        </Typography>
        <Box sx={{ height: 300 , width:'100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
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

export default SuccessRatioChart;

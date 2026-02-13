import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FundingProvider } from './FundingContext/FundingContex';
// const data = [
//   { name: 'Idea Stage', value: 15 },
//   { name: 'Pre-Seed', value: 25 },
//   { name: 'Seed', value: 35 },
//   { name: 'Series A', value: 20 },
//   { name: 'Series B', value: 5 },
// ];



const FundingStageChart = () => {
  const {fundtable} = useContext(FundingProvider);

  const stageCount = fundtable.reduce((acc,curr)=>{
    acc[curr.stage] = (acc[curr.stage]||0)+1;

    return acc;

  },{});

  const ChartData1 = Object.keys(stageCount).map(stage=>({
    name:stage,
    value:stageCount[stage]
  }))

  const COLORS = ['#A5D6A7', '#81C784', '#66BB6A', '#4CAF7A', '#1E4A28'];
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Share by Funding Stage
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ChartData1}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {ChartData1.map((entry, index) => (
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

export default FundingStageChart;

import React, { useContext } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Programcontextcreate } from './ProgramContex/ProgramContext';
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CompletionRateChart = () => {

  const {program} =useContext(Programcontextcreate)
  
  const Completed = Number(program?.AvgcompletionRate ||0)
  const Dropouts =100-Completed


  const data = [
  { name: 'Enrolled', uv: 100, fill: '#E8F5E9' }, // Background track
  { name: 'Completed', uv: Completed, fill: '#1E4A28' },
  { name: 'Dropouts', uv: Dropouts, fill: '#f44336' },
];

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Program Completion Rate
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
              <RadialBar
                minAngle={15}
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                clockWise
                dataKey="uv"
              />
              <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CompletionRateChart;

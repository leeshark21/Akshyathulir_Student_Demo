import React, { useContext, useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Programcontextcreate } from './ProgramContex/ProgramContext';


const BenchmarkRadarChart = () => {
  const { program } = useContext(Programcontextcreate);
  const radarData = useMemo(() => {
    if (!program) return [];
    return [
      {
        subject: 'Completion Rate',
        Actual: program.AvgcompletionRate,
        Target: 90
      },
      {
        subject: 'Survival Rate',
        Actual: program.StartupsurvivalRate,
        Target: 85
      },
      {
        subject: 'KPI Score',
        Actual: program.OverallKPIScore * 20,
        Target: 80
      },
      {
        subject: 'High Performers',
        Actual: program.HigherPerformers * 20,
        Target: 60
      }
    ];
  }, [program]);
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          KPI Benchmarks (Actual vs Target)
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar name="Target" dataKey="Target" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
              <Radar name="Actual Performance" dataKey="AActual" stroke="#1E4A28" fill="#1E4A28" fillOpacity={0.6} />
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

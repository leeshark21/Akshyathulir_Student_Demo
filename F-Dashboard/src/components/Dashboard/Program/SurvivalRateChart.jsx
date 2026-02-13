import React, { useContext, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Programcontextcreate } from './ProgramContex/ProgramContext';


const SurvivalRateChart = () => {

  const {table} = useContext(Programcontextcreate);

  const Chartdata = useMemo(()=>{

    if(!table || table.length === 0) return [];

    return table.map((items)=>({
        cohort:items.cohortYear,
        survival:items.survivalRate

    }))

     

  },[table])


  
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Startup Survival Trends
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={Chartdata}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="cohort" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="survival" stackId="1" stroke="#1E4A28" fill="#1E4A28" fillOpacity={0.6} />

            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SurvivalRateChart;

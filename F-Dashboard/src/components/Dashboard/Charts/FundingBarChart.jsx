import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FundingProvider } from '../Funding/FundingContext/FundingContex';
import { useContext } from 'react';
import { useMemo } from 'react';


const FundingBarChart = () => {
  const { fundtable } = useContext(FundingProvider);

  const data = useMemo(() => {
    if (!fundtable) return [];

    const grouped = {};

    fundtable.forEach((item) => {
      const stage = item.stage || "Unknown";

      if (!grouped[stage]) {
        grouped[stage] = {
          name: stage,
          Allocated: 0,
          Utilized: 0,
        };
      }

      grouped[stage].Allocated += Number(item.allocated || 0);
      grouped[stage].Utilized += Number(item.utilized || 0);
    });

    return Object.values(grouped);
  }, [fundtable]);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Funding Utilization
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Allocated" fill="#1E4A28" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Utilized" fill="#4CAF7A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};


export default FundingBarChart;

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Box from '@mui/material/Box'
import { withTheme } from '@mui/material/styles';

const categoryData = [
  { name: "Product Development", value: 45 },
  { name: "Marketing", value: 25 },
  { name: "Operations", value: 15 },
  { name: "Research", value: 10 },
  { name: "Legal & Admin", value: 5 },
];

const startupData = [
  { name: "EcoTech Innovations", amount: 1500000 },
  { name: "GreenLeaf Solutions", amount: 1200000 },
  { name: "BioEnergy Labs", amount: 900000 },
  { name: "AgriFuture Tech", amount: 750000 },
  { name: "CleanWater Systems", amount: 500000 },
];

const COLORS = ["#2e7d32", "#4caf50", "#81c784", "#aed581", "#c5e1a5"];

export default function FundingCharts() {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12,md:6}}>
        <Card sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography fontWeight="bold">
              Fund Utilization by Category
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{xs:12,md:6}}>
        <Card sx={{ borderRadius: 3 ,px:4}}>
          <CardContent>
            <Typography fontWeight="bold">
              Funding per Startup (Top 5)
            </Typography>
           <Box sx={{height:300}}>
            <ResponsiveContainer width="100%" height="100%" >
              <BarChart data={startupData} layout="vertical" >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number" hide />
                <YAxis  dataKey="name" type="category"  />
                <Tooltip />
                <Bar dataKey="amount" fill="#4caf50" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
             
           </Box>
            
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
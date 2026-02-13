
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useContext } from 'react';
import  { FundingProvider } from './FundingContext/FundingContex';


const UtilizationProgress = () => {

  const {fundtable} = useContext(FundingProvider);

  const getColor =(percent)=>{

    if (percent >= 90) return "warning"
    if (percent >= 70) return "success"
    if (percent >= 40) return "info"

    return "secondary" ;

  }

  
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary.main">
          Budget Utilization by Program
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          {fundtable.map((prog) => {
            const percentage = Math.round(
              (prog.utilized / prog.allocated) *100
            )
          return (
            <Box key={prog.startupName} sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" fontWeight="bold">
                  {prog.startupName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prog.utilized}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={percentage} 
                color={getColor(percentage)} 
                sx={{ height: 10, borderRadius: 5 }}
              />
            </Box>
          )})}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UtilizationProgress;

import * as React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
const FundingProgress = ({ title, value, total }) => {
  const percent = (value / total) * 100;

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={0.5}
      >
        <Typography fontWeight={500}>{title}</Typography>
        <Typography color="text.secondary">
          ${value}K of ${total}K
        </Typography>
      </Stack>

      <LinearProgress
        variant="determinate"
        value={percent}
        sx={{
          height: 10,
          borderRadius: 5,
          bgcolor: "#E5E7EB",
          "& .MuiLinearProgress-bar": {
            bgcolor: "success.main",
            borderRadius: 5,
          },
        }}
      />
    </Box>
  );
};

export default FundingProgress;
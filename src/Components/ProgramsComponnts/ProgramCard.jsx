import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ProgramCard = ({
  title,
  icon,
  date,
  startups,
  success,
}) => {
  return (
    <Card
      sx={{
         width: 384.2,
                    height: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    bgcolor: 'white',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#1E4A28',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      transform: 'translateY(-4px)',
                      '&::before': {
                        transform: 'scaleX(1)',
                      },
                    },
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          {icon}
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
        </Stack>

        <Stack spacing={1.5} mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EventIcon sx={{ color: '#1E4A28' }} fontSize="small" />
            <Typography variant="body2">{date}</Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleIcon sx={{ color: '#1E4A28' }} fontSize="small" />
            <Typography variant="body2">
              {startups} Startups Enrolled
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <CheckCircleIcon sx={{ color: '#1E4A28' }} fontSize="small" />
            <Typography variant="body2">
              <strong>{success}%</strong> Success Rate
            </Typography>
          </Stack>
        </Stack>

        <Button
          fullWidth
          sx={{
            mt: 3,
            bgcolor: '#1E4A28',
            color: '#fff',
            borderRadius: 2,
            "&:hover": { bgcolor: '#1E4A28', opacity: 0.9 },
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
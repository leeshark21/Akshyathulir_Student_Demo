import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import EventIcon from "@mui/icons-material/Event";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dashboard from './Dashboard';

const actions = [
  {
    title: "Add Startup",
    desc: "Submit a new startup application.",
    btn: "Add Startup",
    icon: AddCircleOutlineIcon,
    color: "green",
  },
  {
    title: "Send Announcement",
    desc: "Broadcast a message to all users.",
    btn: "Email Post",
    icon: CampaignIcon,
    color: "green",
  },
  {
    title: "Create Event",
    desc: "Organize and schedule a new event.",
    btn: "Create Event",
    icon: EventIcon,
    color: "green",
  },
  {
    title: "Add Mentor",
    desc: "Invite a new mentor to join.",
    btn: "Add Mentor",
    icon: PersonAddIcon,
    color: "green",
  },
  {
    title: "Upload Resource",
    desc: "Upload files for startups and mentors.",
    btn: "Upload Resource",
    icon: CloudUploadIcon,
    color: "green",
  },
];

export default function QuickActions() {
  return (
    <Box>
      <Dashboard/> 
       <Box sx={{mt:-60, p: 3,  background: "#f6f7fb", minHeight: "100vh" }}>
      
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Quick Actions
      </Typography>

      <Grid container spacing={3}>
        {actions.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Card
                sx={{
                  height: 300,
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
                    backgroundColor: '#2e7d32',
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
                <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <Box mb={2}>
                    <IconComponent sx={{ fontSize: 50, color: item.color }} />
                  </Box>

                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" mb={3}>
                    {item.desc}
                  </Typography>

                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<IconComponent />}
                    sx={{ borderRadius: 2, color: 'green',border:'1px solid green' }}
                  >
                    {item.btn}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>

    </Box>
   
  );
}
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import FlagIcon from "@mui/icons-material/Flag";
import DomainIcon from "@mui/icons-material/Domain";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";


const items = [
    {
        title: "General Settings",
        desc: "Manage organization details",
        icon: <SettingsIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    },
    {
        title: "User Management",
        desc: "Manage user and roles",
        icon: <GroupIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    },
    {
        title: "Stage Management",
        desc: "Define startup stages",
        icon: <FlagIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    },
    {
        title: "Domain Management",
        desc: "Define startup domains",
        icon: <DomainIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    },
    {
        title: "Email Templates",
        desc: "Manage automated emails",
        icon: <EmailIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    },
    {
        title: "Docs & Resources",
        desc: "Manage shared documents",
        icon: <FolderIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
    }
];

export default function Settings() {
    return (
        <Box sx={{ p: 4, backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
            <Typography variant="h5" fontWeight={600} mb={4}>
                Settings
            </Typography>

            <Grid container spacing={3}>
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                width: 384,
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
                            <CardContent>
                                <Stack spacing={2}>
                                    {item.icon}

                                    <Typography variant="h6" fontWeight={600}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        {item.desc}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            mt: 2,
                                            width: "fit-content",
                                            backgroundColor: "#4CAF50",
                                            borderRadius: 2,
                                            px: 15,
                                            "&:hover": {
                                                backgroundColor: "#43A047"
                                            }
                                        }}
                                    >
                                        Configure
                                    </Button>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
        </Box>
    );
}

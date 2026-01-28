import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import StudentDetailsStep from './com/StudentDetailsStep';
import StartupDetailsStep from './com/StartupDetailsStep';
import ResearcherDetailsStep from './com/ResearcherDetailsStep';
import SocialEntrepreneurDetailsStep from './com/SocialEntrepreneurDetailsStep';
import MSMEDetailsStep from './com/MSMEDetailsStep';
import PageBelow from '../Pages/PageBelow';




const ApplicantType = () => {

    const [selectedType, setSelectedType] = useState("");
    const pages = [
        // { type: "women", component: <WomenEntrepreneurPage /> },
        { type: "startup", component1: <StartupDetailsStep />, component2: <PageBelow /> },
        { type: "researcher", component1: <ResearcherDetailsStep />, component2: <PageBelow /> },
        { type: "social", component1: <SocialEntrepreneurDetailsStep />, component2: <PageBelow /> },
        { type: "msme", component1: <MSMEDetailsStep /> , component2: <PageBelow />},
        { type: "student", component1: <StudentDetailsStep />, component2: <PageBelow /> },
    ];

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <Box sx={{  display:'flex',flexDirection:'column'}}>
                <Box sx={{ml:0.1,border: '2px solid green', height: '200px'}}>
                    <Box sx={{ bgcolor: 'green', color: 'white', px: 2 }}>
                    <Typography variant="h5" >Select Applicant Type</Typography>
                </Box>
                 <Box sx={{ p: 4 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Applicant Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedType}
                            label="Applicant Type"
                            onChange={(e) => setSelectedType(e.target.value)}
                        >
                            {/* <MenuItem value="women">Women Entrepreneur</MenuItem> */}
                            <MenuItem value="student">Student / Innovator</MenuItem>
                            <MenuItem value="startup">Startup Founder</MenuItem>
                            <MenuItem value="researcher">Researcher / Scientist</MenuItem>
                            <MenuItem value="social">Social Entrepreneur</MenuItem>
                            <MenuItem value="msme">MSME / Small Business</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                </Box>
                

               
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Box mt={4}>
                        {pages
                            .filter((item) => item.type === selectedType)
                            .map((item) => item.component1)
                        }
                    </Box>
                    <Box >
                        {pages
                            .filter((item) => item.type === selectedType)
                            .map((item) => item.component2)}

                    </Box>

                </Box>



            </Box>

        </>
    )
}

export default ApplicantType


import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';


const GovermentScheme = () => {
    return (
        <Container>
            <Box sx={{ mt: '30px' }}>
                <Box sx={{
                    backgroundColor: 'green',
                    display: 'flex',
                    height: { xs: 'auto', sm: '50px' },
                    minHeight: { xs: '50px', sm: '50px' },
                    justifyContent: 'center',
                    py: { xs: 1, sm: 0 },
                    borderRadius: { xs: '8px 8px 0 0', sm: '8px 8px 0 0' }
                }}>
                    <Typography variant='body1' component='p' sx={{
                        mb: { xs: 0, sm: 2 },
                        color: 'white',
                        height: { xs: 'auto', sm: '40px' },
                        mt: { xs: 0, sm: '10px' },
                        px: { xs: 1, sm: 0 },
                        textAlign: 'center',
                        fontWeight: 600
                    }}>
                        Government Scheme Requirement Form
                    </Typography>
                </Box>

                <Box sx={{ 
                    border: '2px solid green',
                    borderTop: 'none',
                    borderRadius: { xs: '0 0 8px 8px', sm: '0 0 8px 8px' },
                    p: { xs: 1.5, sm: 2.5 },
                    backgroundColor: '#fafafa'
                }}>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'flex-start', md: 'space-around' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        gap: { xs: 2, md: 0 }
                    }}>
                        <TextField
                            label='Incubation Center Name'
                            placeholder='Enter Incubation Center Name'
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label='Scheme Name (If Any)'
                            placeholder='Enter Scheme Name (Optional)'
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />

                        <TextField
                            select
                            label='Select Funding Range'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='LessThan10Lakhs'>Less than 10 Lakhs</MenuItem>
                            <MenuItem value='10LakhsTo25Lakhs'>10 Lakhs - 25 Lakhs</MenuItem>
                            <MenuItem value='25LakhsTo50Lakhs'>25 Lakhs - 50 Lakhs</MenuItem>
                            <MenuItem value='50LakhsTo1Crore'>50 Lakhs - 1 Crore</MenuItem>
                            <MenuItem value='Above1Crore'>Above 1 Crore</MenuItem>
                        </TextField>
                    </Box>

                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'flex-start', md: 'space-around' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        gap: { xs: 2, md: 0 }
                    }}>
                        <TextField
                            label='Application Date'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />

                        <TextField
                            select
                            label='Preferred Government Department/Ministry'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='MSME'>MSME</MenuItem>
                            <MenuItem value='StartupIndia'>Startup India</MenuItem>
                            <MenuItem value='DST'>DST</MenuItem>
                            <MenuItem value='Meity'>Meity</MenuItem>
                            <MenuItem value='AICTE'>AICTE</MenuItem>
                            <MenuItem value='StateGovernment'>State Government</MenuItem>
                            <MenuItem value='AnyGovernmentDepartment'>Any Government Department</MenuItem>
                        </TextField>

                        <TextField
                            label='Number of Startups to be Benefited' 
                            placeholder='Enter number of startups'
                            type='number'
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />
                    </Box>
                    
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'flex-start', md: 'space-around' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        gap: { xs: 2, md: 0 }
                    }}>
                        <TextField
                            select
                            label='Scheme Priority Level'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='High'>High</MenuItem>
                            <MenuItem value='Medium'>Medium</MenuItem>
                            <MenuItem value='Low'>Low</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Scheme Duration'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='LessThan6Months'>Less than 6 Months</MenuItem>
                            <MenuItem value='6MonthsTo1Year'>6 Months - 1 Year</MenuItem>
                            <MenuItem value='1To3Years'>1 - 3 years</MenuItem>
                            <MenuItem value='MoreThan3Years'>More than 3 Years</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Previous Government Scheme'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='SuccessfullyImplemented'>Successfully Implemented</MenuItem>
                            <MenuItem value='PartiallyImplemented'>Partially Implemented</MenuItem>
                            <MenuItem value='AppliedButNotApproved'>Applied but Not Approved</MenuItem>
                            <MenuItem value='NoPreviousExperience'>No Previous Experience</MenuItem>
                        </TextField>
                    </Box>
                    
                    
                    
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: { xs: 'flex-start', md: 'space-around' },
                        alignItems: { xs: 'stretch', md: 'center' },
                        gap: { xs: 2, md: 0 },
                        mt: { xs: 2, md: 2 }
                    }}>
                        <TextField
                            select
                            label='Scheme Implementation Mode'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='DirectGovernmentFunding'>Direct Government Funding</MenuItem>
                            <MenuItem value='IncubationCenterManaged'>Incubation Center Managed</MenuItem>
                            <MenuItem value='PublicPrivatePartnership'>Public-Private Partnership</MenuItem>
                            <MenuItem value='ThroughPartnerInstitutions'>Through Partner Institutions</MenuItem>
                            <MenuItem value='NotDecided'>Not Decided</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Monitoring & Reporting'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='Monthly'>Monthly</MenuItem>
                            <MenuItem value='Quarterly'>Quarterly</MenuItem>
                            <MenuItem value='HalfYearly'>Half-Yearly</MenuItem>
                            <MenuItem value='AsRequired'>As Required</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Expected Outcome/Impact'
                            defaultValue=''
                            fullWidth
                            sx={{ 
                                width: { xs: '100%', md: '300px' }, 
                                mb: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        >
                            <MenuItem value='StartupGrowthAcceleration'>Startup Growth Acceleration</MenuItem>
                            <MenuItem value='JobCreation'>Job Creation</MenuItem>
                            <MenuItem value='TechnologyCommercialization'>Technology Commercialization</MenuItem>
                            <MenuItem value='IncreasedRevenue'>Increased Revenue</MenuItem>
                        </TextField>
                    </Box>

                    <Box>
                        <TextField
                            label='Purpose of Scheme'
                            name='purposeOfScheme'
                            multiline
                            rows={4}
                            fullWidth
                            placeholder='Explain the purpose and expected outcome'
                            sx={{
                               ml:{xs:"0",md:'35px'},
                                width: { xs: '100%', md: '1040px' },
                                mt: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        <TextField
                            label='Additional Remarks'
                            name='additionalRemarks'
                            multiline
                            rows={4}
                            fullWidth
                            placeholder='Any additional requirements or Comments'
                            sx={{
                                ml:{xs:"0",md:'35px'},
                                width: { xs: '100%', md: '1040px' },
                                mt: { xs: 2, md: 2 },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '&:hover fieldset': {
                                        borderColor: 'green',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'green',
                                    },
                                },
                            }}
                        />
                    </Box>

                    <Box sx={{ 
                        ml: { xs: 0, md: 3.5 }, 
                        mb: 1,
                        mt: { xs: 3, md: 3 } 
                    }}>
                        <Typography variant='h6' sx={{ mb: 1.5, fontWeight: 600 }}>Type of Support Needed:</Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Funding/Grants"
                            />
                            <FormControlLabel
                                control={<Checkbox />}  
                                label="Infrastructure Support"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="R&D Support"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Startup Subsidies"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Tax Benefits"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Mentorship Programs"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Skill Development Programs"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Technology/Digital Support"
                            />
                        </FormGroup>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default GovermentScheme

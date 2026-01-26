import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';


const Startup = () => {
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
                        Startup Application Form
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
                            label='Startup Name'
                            placeholder='Enter your startup name'
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
                            label='Founder/Co-Founder Name'
                            placeholder='Enter founder/co-founder name'
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
                            label='Industry Domain'
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
                            <MenuItem value='ITSoftware'>IT/Software</MenuItem>
                            <MenuItem value='FinTech'>FinTech</MenuItem>
                            <MenuItem value='HealthTech'>HealthTech</MenuItem>
                            <MenuItem value='EdTech'>EdTech</MenuItem>
                            <MenuItem value='AgriTech'>AgriTech</MenuItem>
                            <MenuItem value='Ecommerce'>E-commerce</MenuItem>
                            <MenuItem value='AIMachineLearning'>AI/Machine Learning</MenuItem>
                            <MenuItem value='IoT'>IoT</MenuItem>
                            <MenuItem value='Manufacturing'>Manufacturing</MenuItem>
                            <MenuItem value='CleanTechGreenEnergy'>CleanTech/Green Energy</MenuItem>
                            <MenuItem value='Biotechnology'>Biotechnology</MenuItem>
                            <MenuItem value='LogisticsSupplyChain'>Logistics/Supply Chain</MenuItem>
                            <MenuItem value='Other'>Other</MenuItem>
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
                            select
                            label='Stage of Startup'
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
                            <MenuItem value='IdeaStage'>Idea Stage</MenuItem>
                            <MenuItem value='MVP'>MVP (Minimum Viable Product)</MenuItem>
                            <MenuItem value='RevenueGenerating'>Revenue Generating</MenuItem>
                            <MenuItem value='ScalingStage'>Scaling Stage</MenuItem>
                        </TextField>

                        <TextField
                            label='Team Size'
                            placeholder='Number of team members'
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

                        <TextField
                            label='Year Founded'
                            placeholder='e.g. 2023'
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
                            label='Funding Status'
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
                            <MenuItem value='NotFundedYet'>Not Funded Yet</MenuItem>
                            <MenuItem value='Bootstrapped'>Bootstrapped</MenuItem>
                            <MenuItem value='SeedFunded'>Seed Funded</MenuItem>
                            <MenuItem value='AngelFunded'>Angel Funded</MenuItem>
                            <MenuItem value='VentureCapitalFunded'>Venture Capital Funded</MenuItem>
                            <MenuItem value='GovernmentGrant'>Government Grant</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Company Registration Status'
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
                            <MenuItem value='NotRegistered'>Not Registered</MenuItem>
                            <MenuItem value='Proprietorship'>Proprietorship</MenuItem>
                            <MenuItem value='Partnership'>Partnership</MenuItem>
                            <MenuItem value='LLP'>LLP (Limited Liability Partnership)</MenuItem>
                            <MenuItem value='PrivateLimitedCompany'>Private Limited Company</MenuItem>
                            <MenuItem value='PublicLimitedCompany'>Public Limited Company</MenuItem>
                        </TextField>
                        
                        <TextField
                            select
                            label='Revenue Model'
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
                            <MenuItem value='SubscriptionBased'>Subscription Based</MenuItem>
                            <MenuItem value='CommissionBased'>Commission Based</MenuItem>
                            <MenuItem value='OneTimePurchase'>One-Time Purchase</MenuItem>
                            <MenuItem value='Freemium'>Freemium</MenuItem>
                            <MenuItem value='Advertising'>Advertising</MenuItem>
                            <MenuItem value='Licensing'>Licensing</MenuItem>
                            <MenuItem value='SaaSModel'>SaaS Model</MenuItem>
                            <MenuItem value='MarketplaceModel'>Marketplace Model</MenuItem>
                            <MenuItem value='NotDecidedYet'>Not Decided Yet</MenuItem>
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
                            select
                            label='Target Market'
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
                            <MenuItem value='Local'>Local</MenuItem>
                            <MenuItem value='Regional'>Regional</MenuItem>
                            <MenuItem value='National'>National</MenuItem>
                            <MenuItem value='InternationalGlobal'>International/Global</MenuItem>
                        </TextField>

                        <TextField
                            label='Website/Product Demo Link'
                            placeholder='https://yourwebsite.com'
                            type='url'
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

                        <Button 
                            variant='contained'
                            component='label'
                            fullWidth
                            sx={{ 
                              height: { xs: '56px', md: '56px' }, 
                              width: { xs: '100%', md: '300px' }, 
                              mb: { xs: 2, md: 2 },
                              borderRadius: '8px',
                              backgroundColor: 'green',
                              '&:hover': {
                                backgroundColor: '#006400',
                              },
                            }}
                        >
                            Choose File
                            <input type="file"
                                hidden
                                accept='.pdf,.ppt,.pptx' />
                        </Button>
                    </Box>

                    <Box>
                        <TextField
                            label='Problem Statement'
                            name='problemStatement'
                            multiline
                            rows={4}
                            fullWidth
                            placeholder='Describe the problem your startup aims to solve'
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
                        ml: { xs: 0, md: 3.6 }, 
                        mb: 1,
                        mt: { xs: 3, md: 3 } 
                        
                    }}>
                        <Typography variant='h6' sx={{ mb: 1.5, fontWeight: 600 }}>Expected Support from Incubation:</Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Mentorship & Guidance"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Technical Support"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Funding Assistance"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Workspace / Infrastructure"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Legal & Compliance Support"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Marketing & Sales Support"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Networking & Industry Connections"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Investor Connect"
                            />
                        </FormGroup>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Startup

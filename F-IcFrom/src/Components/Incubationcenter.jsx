
import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const Incubation = () => {
  return (
      <Container >

            <Box

                sx={{ mt: '30px' }}

            >

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
                        Incubation Center Registration Form
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
                            label='Center Name'
                            placeholder='Innovation & Incubation Center'
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
                            label='Organization Type'
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
                            <MenuItem value='University'>University</MenuItem>
                            <MenuItem value='Private'>Private</MenuItem>
                            <MenuItem value='Government'>Government</MenuItem>
                        </TextField>
                        
                        <TextField
                            label='Year Established'
                            placeholder='e.g. 2013'
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
                            label='Email'
                            placeholder='example@mail.com'
                            type='email'
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
                            label='Contact Phone'
                            placeholder='Enter phone number'
                            type='tel'
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
                            label='Location' 
                            placeholder='e.g. Chennai, Tamilnadu, India'
                            type='text'
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
                            label='Government Affiliation'
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
                            <MenuItem value='Yes'>Yes</MenuItem>
                            <MenuItem value='No'>No</MenuItem>
                        </TextField>
                        
                        <TextField
                            label='Website URL' 
                            placeholder='e.g. www.yourwebsite.com'
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
                    
                        <TextField
                            label='Total Startup Count' 
                            placeholder='Enter total number of startups'
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
                      <Box>
                        <TextField
                          label='Description'
                          name='description'
                          multiline
                          rows={4}
                          fullWidth
                          
                          placeholder='Brief overview of the Incubation center, vision, and support offered'
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
                </Box>



            </Box>


        </Container>
  )
}

export default Incubation

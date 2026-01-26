
import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const Collaboration = () => {
  return (
      <Container >

            <Box

                sx={{ mt: '30px' }}

            >

                <Box sx={{
                    backgroundColor: 'green', display: 'flex', height: '50px',
                    justifyContent: 'center'
                }}>
                    <Typography variant='body1' component='p' sx={{
                        mb: 2, color: 'white', height: '40px', mt: '10px'
                    }}>
                        Collaboration Request Form
                    </Typography>

                </Box>

                <Box sx={{ border: '2px solid green', p: 2 }}>

                      <Box sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                         <TextField
                            label='Organization Name'
                            placeholder='Enter organization name'
                        
                            sx={{ width: '300px', mb: 2 }}
                        />

                         

                         <TextField
                        select
                        label='Collaboration Tyoe'
                        defaultValue=''

                        sx={{ width: '300px', mb: 2 }}
                    >
                        <MenuItem value='IT/Software'>Mentorship</MenuItem>
                        <MenuItem value='FinTech'>Funding</MenuItem>
                        <MenuItem value='HealthTech'>Infrastructure</MenuItem>
                        <MenuItem value='EdTech'>Research & Development(R&D)</MenuItem>
                        

                    </TextField>
                    <TextField
                            label='contact Person'
                            placeholder='Contact person name'
                        
                            sx={{ width: '300px', mb: 2 }}
                        />


                     </Box>

                      <Box sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                       <TextField
                            label='Email'
                            placeholder='example@mail.com'
                        
                            sx={{ width: '300px', mb: 2 }}
                        />

                     <TextField
                            label='Number/Telephone'
                            placeholder='Enter phone number'
                            type='number'
                        
                            sx={{ width: '300px', mb: 2 }}
                        />

                         <TextField
                            label='Area of Expertise' 
                            placeholder='Eg:AI,Markreting,Manufacturing'
                            type='text'
                        
                            sx={{ width: '300px', mb: 2 }}
                        />
                      </Box>
                       <Box sx={{height:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                        <TextField
                        select
                        label='Duration of Collaboration'
                        defaultValue=''

                        sx={{ width: '300px', mb: 2 }}
                    >
                        <MenuItem value='NotFundedYet'>Less than 3 months</MenuItem>
                        <MenuItem value='Bootstrapped'>3-6 months</MenuItem>
                        <MenuItem value='SeedFunded'>6-12 months</MenuItem>
                        <MenuItem value='AngelFunded'>More than 1 year</MenuItem>
     
                        
                        

                    </TextField>
                    <TextField
                        select
                        label='Previous Collaboration Experience'
                        defaultValue=''

                        sx={{ width: '300px', mb: 2 }}
                    >
                        <MenuItem value='Yes'>Yes</MenuItem>
                        <MenuItem value='No'>No</MenuItem>
                        <MenuItem value='FirstTimeCollaborating'>First Time Collaborating</MenuItem>
                     
                        
                        

                    </TextField>
                    <TextField
                        select
                        label='Mode of Collaboration'
                        defaultValue=''

                        sx={{ width: '300px', mb: 2 }}
                    >
                        <MenuItem value='Online'>Online</MenuItem>
                        <MenuItem value='Offline'>Offline</MenuItem>
                        <MenuItem value='Hybrid'>Hybrid</MenuItem>
                       
                  
                        
                        

                    </TextField>

                    
                         
                      </Box>
                      <Box>
                        <TextField
                          label='Collaboration Requirement'
                          name='"requirements'
                          multiline
                          rows={4}
                          
                          placeholder='Describe your collaboration requirements'
                          sx={{marginLeft:'35px',width:'1046px'}}
                        />
 
                      </Box>

                      

                      <Box>
                        
                      </Box>

                      

                </Box>



            </Box>


        </Container>
  )
}

export default Collaboration

import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';




const Facilities = () => {
    return (
        <Container >
           
            <Box

                 sx={{mt:'30px'}}

            >   

            <Box sx={{backgroundColor:'green',display:'flex',height:'50px',
            justifyContent:'center'
            }}>
                 <Typography variant='body1' component='p' sx={{ 
                    mb: 2,color:'white',height:'40px',mt:'10px'}}>
                    Facilities Available
                </Typography>

            </Box>
                 
                <Box sx={{ border: '2px solid green', p: 2 }}>

                  <Typography variant='body1' component='p' sx={{ mt: 2, mb: 1 }}>
                    Office:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Co-Working Spaces" />
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Private Cabins" />
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Meeting Area" />
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Board Room" />
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Raw Space" />
                  </Box>

                  <Typography variant='body1' component='p' sx={{ mt: 2, mb: 1 }}>
                    Sciences:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Labs" />
                    <FormControlLabel sx={{ ml: 13}}control={<Checkbox />} label="Equipments" />
                    <FormControlLabel sx={{ ml: 3 }} control={<Checkbox />} label="Lab Space" />
                  </Box>

                  <Typography variant='body1' component='p' sx={{ mt: 2, mb: 1 }}>
                    Engineering:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Machines" />
                    <FormControlLabel sx={{ ml: 8.7 }} control={<Checkbox />} label="Production" />
                    <FormControlLabel sx={{ ml: 4 }} control={<Checkbox />} label="Manufacturing Space" />
                  </Box>

                  <Typography variant='body1' component='p' sx={{ mt: 2, mb: 1 }}>
                    Studios:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center', mb: 2 }}>
                    <FormControlLabel sx={{ ml: 0 }} control={<Checkbox />} label="Video" />
                    <FormControlLabel sx={{ ml: 12 }} control={<Checkbox />} label="Podcast" />
                  </Box>

                </Box>



            </Box>


        </Container>
    )
}

export default Facilities
